import * as Yup from 'yup';
import { isBefore, format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Op } from 'sequelize';
import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';
import Mail from '../../lib/Mail';

class SubscriptionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      meetup_id: Yup.number().required(),
    });

    if (!schema.isValid()) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const meetup = await Meetup.findOne({
      where: {
        id: req.body.meetup_id,
      },
      include: [
        {
          model: User,
          as: 'owner',
        },
      ],
    });
    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found!' });
    }
    /**
     * Check if the user is not owner of meetup
     */
    if (meetup.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: "Can't subscript in your own meetups " });
    }
    /**
     * Check if the meetup has been happened
     */
    if (isBefore(meetup.schedule, new Date())) {
      return res.status(400).json({ error: "Can't subscript past meetups" });
    }

    const subs = await Subscription.findOne({
      where: {
        user_id: req.userId,
        meetup_id: req.body.meetup_id,
      },
    });
    /**
     * Check if user has been signed for the meetup
     */
    if (subs) {
      return res
        .status(400)
        .json({ error: 'You already signed up for this meetup!' });
    }
    const subHour = await Subscription.findOne({
      where: {
        [Op.and]: [{ '$Meetup.schedule$': meetup.schedule }],
        user_id: req.userId,
      },
      include: [Meetup],
    });
    /**
     * Check if the user already signed up for a meetup in this hour
     */
    if (subHour) {
      return res
        .status(400)
        .json({ err: 'You already signed up for one meetup in this hour' });
    }

    const subscription = await Subscription.create({
      user_id: req.userId,
      meetup_id: req.body.meetup_id,
    });

    const user = await User.findByPk(req.userId);

    const formattedDate = format(
      meetup.schedule,
      "d 'de' MMMM ', às' HH:mm'h'",
      {
        locale: pt,
      }
    );

    await Mail.sendMail({
      to: `${meetup.owner.name} <${meetup.owner.email}>`,
      subject: `Houve uma inscrição no Evento ${meetup.title}`,
      template: 'subscription',
      context: {
        owner: meetup.owner.name,
        title: meetup.title,
        date: formattedDate,
        user: user.name,
        email: user.email,
      },
    });
    return res.send(subscription);
  }

  async show(req, res) {
    const sub = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          where: {
            schedule: {
              [Op.gt]: new Date(),
            },
          },
          attributes: [
            'id',
            'past',
            'title',
            'description',
            'location',
            'schedule',
          ],
          include: [
            {
              model: File,
              as: 'meetup_banner',
              attributes: ['path'],
            },
            {
              model: User,
              as: 'owner',
              attributes: ['name', 'email'],
            },
          ],
        },
      ],
      attributes: ['id'],
      order: [[Meetup, 'schedule', 'asc']],
    });
    return res.send(sub);
  }

  async delete(req, res) {
    const { id } = req.params;

    const sub = await Subscription.findByPk(id);

    if (!sub) {
      return res.status(400).json({ error: 'Subscription not found!' });
    }

    /**
     * check if the user is thw owner of the subscription
     */
    if (req.userId !== sub.user_id) {
      return res
        .status(400)
        .json({ error: 'You can only unsubscribe to your own subscriptions!' });
    }

    await sub.destroy();

    return res.json();
  }
}
export default new SubscriptionController();
