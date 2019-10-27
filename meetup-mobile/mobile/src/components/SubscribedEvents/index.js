import React from 'react';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { API_IP } from 'react-native-dotenv';

import {
  Container,
  Banner,
  MeetupData,
  Title,
  TextArea,
  ButtonSubmit,
  TextInfo,
} from './styles';
import api from '~/services/api';

export default function SubscribedEvents({ eventData, reloadSubscribed }) {
  const dateParsed = format(
    parseISO(eventData.Meetup.schedule),
    "d 'de' MMMM ', às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const { meetup_banner } = eventData.Meetup;

  async function handleUnsubscribe(id) {
    await api.delete(`subscription/${id}`);
    reloadSubscribed();
  }

  return (
    <Container>
      <Banner
        source={{
          uri: `${API_IP}/files/${meetup_banner && meetup_banner.path}`,
        }}
      />
      <MeetupData>
        <Title>{eventData.Meetup.title}</Title>
        <TextArea>
          <Icon name="event" size={14} color="#999" />
          <TextInfo>{dateParsed}</TextInfo>
        </TextArea>
        <TextArea>
          <Icon name="place" size={14} color="#999" />
          <TextInfo>{eventData.Meetup.location}</TextInfo>
        </TextArea>
        <TextArea>
          <Icon name="person" size={14} color="#999" />
          <TextInfo>Organizador: {eventData.Meetup.owner.name}</TextInfo>
        </TextArea>
      </MeetupData>
      <ButtonSubmit
        onPress={() => {
          Alert.alert(
            ':: MEETAPP ::',
            'Deseja cancelar sua Inscrição?',
            [
              {
                text: 'Não',
                onPress: () => {
                  return false;
                },
                style: 'cancel',
              },
              {
                text: 'Sim',
                onPress: () => handleUnsubscribe(eventData.id),
              },
            ],
            { cancelable: false }
          );
        }}
      >
        Cancelar Inscrição
      </ButtonSubmit>
    </Container>
  );
}
