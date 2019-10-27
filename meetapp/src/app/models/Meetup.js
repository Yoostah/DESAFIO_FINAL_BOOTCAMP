import Sequelize, { Model } from 'sequelize';
import { isBefore } from 'date-fns';

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        location: Sequelize.STRING,
        schedule: Sequelize.DATE,
        user_id: Sequelize.INTEGER,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.schedule, new Date());
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Subscription, {
      foreignKey: 'meetup_id',
    });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
    this.belongsTo(models.File, {
      foreignKey: 'banner_id',
      as: 'meetup_banner',
    });
  }
}

export default Meetup;
