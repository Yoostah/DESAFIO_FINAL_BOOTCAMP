import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Details(props) {
  const { match } = props;
  const [meetup, setMeetup] = useState({});
  const [bannerUrl, setBanner] = useState();

  useEffect(() => {
    async function getMeetupData() {
      const meetupID = match.params.meetup;
      const response = await api.get(`/meetup/${meetupID}`);
      const { email } = response.data.owner;

      const formattedMeetup = Object.assign({}, response.data, {
        formattedDate: format(
          parseISO(response.data.schedule),
          "d 'de' MMMM ', às' HH:mm'h'",
          {
            locale: pt,
          }
        ),
        owner_email: email,
      });

      const { url } = response.data.meetup_banner;
      setMeetup(formattedMeetup);
      setBanner(url);
    }
    getMeetupData();
  }, [match.params.meetup]);

  async function handleCancel(meetupID) {
    try {
      await api.delete(`/meetup/${meetupID}`);
      history.push('/dashboard');
      toast.success('Meetup cancelado com sucesso');
    } catch (error) {
      toast.error('Erro ao cancelar a meetup');
    }
  }

  function handleEdit(data) {
    history.push('/meetup', { ...data, banner_id: bannerUrl });
  }

  const Alert = () => (
    <div style={{ height: 100, fontSize: 16, textAlign: 'center' }}>
      <strong>Deseja Cancelar este meetup?</strong>
      <br />

      <button
        onClick={() => handleCancel(meetup.id)}
        style={{
          height: 42,
          width: 200,
          color: '#FFF',
          background: '#000',
          opacity: 0.8,
          borderRadius: 4,
          border: 0,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 15,
          fontSize: 16,
        }}
        type="button"
      >
        <strong>Sim, Cancelar</strong>
      </button>
    </div>
  );

  function handleToggleDelete() {
    toast.info(<Alert />);
  }
  return (
    <Container>
      <Meetup>
        <header>
          <strong>{meetup.title}</strong>
          <div>
            <button type="button" onClick={() => handleEdit(meetup)}>
              <div>
                <MdModeEdit size={20} color="#FFF" />
                Editar
              </div>
            </button>
            <button type="button" onClick={handleToggleDelete}>
              <div>
                <MdDeleteForever size={20} color="#FFF" />
                Cancelar
              </div>
            </button>
          </div>
        </header>
        <img src={bannerUrl} alt="Meetup_Banner" />
        <p>{meetup.description}</p>
        <p>
          Caso queira participar como palestrante da meetup envie um email para
          {` ${meetup.owner_email}`}.
        </p>
        <div>
          <span>
            <MdEvent size={20} color="#FFF" />
            <p>{meetup.formattedDate}</p>
          </span>
          <span>
            <MdPlace size={20} color="#FFF" />
            <p>{meetup.location}</p>
          </span>
        </div>
      </Meetup>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetup: PropTypes.string,
    }),
  }).isRequired,
};
