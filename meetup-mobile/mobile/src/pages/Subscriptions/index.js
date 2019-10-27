import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
import Background from '~/components/Background';
import SubscribedEvents from '~/components/SubscribedEvents';

import { Container, List, NoMeetups, NoMeetupsText } from './styles';

import api from '~/services/api';

function Subscriptions({ isFocused, navigation }) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscribedEvents() {
    try {
      const response = await api.get(`subscription`);

      setSubscriptions(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possivel carregar as inscrições');
    }
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscribedEvents();
    }
  }, [isFocused]);

  return (
    <Background>
      <Header navigation={navigation} />
      <Container>
        {subscriptions.length ? (
          <List
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <SubscribedEvents
                eventData={item}
                reloadSubscribed={loadSubscribedEvents}
              />
            )}
          />
        ) : (
          <NoMeetups>
            <Icon name="event-busy" size={64} color="#F00" />
            <NoMeetupsText>
              Você não está inscrito em nenhum Meetup.
            </NoMeetupsText>
          </NoMeetups>
        )}
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
