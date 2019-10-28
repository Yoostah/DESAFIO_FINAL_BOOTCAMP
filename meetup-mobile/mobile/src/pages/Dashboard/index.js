import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import { format, parseISO, addDays, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
import Background from '~/components/Background';
import Meetups from '~/components/Meetups';

import {
  Container,
  DateSelector,
  DateButton,
  TextDate,
  List,
  NoMeetups,
  NoMeetupsText,
  Spinner
} from './styles';

import api from '~/services/api';

function Dashboard({ isFocused, navigation }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [uniquePage, setUniquePage] = useState(false);
  const [page, setPage] = useState(0);

  const dateFormated = format(date, "d 'de' MMMM 'de' yyyy", { locale: ptBR });

  async function loadavailableMeetups() {
    try {
      setLoading(true);
      setUniquePage(false)
      const response = await api.get(
        `meetup?date=${new Date(date).toISOString()}&page=${page +1}`
      );



      if (response.data.length) {
        if(response.data.length < 10 ){
          setUniquePage(true)
        }
        const subscribedEvents = await api.get('subscription');
        const subscribedEventsID = subscribedEvents.data.map(
          event => event.Meetup.id
        );

        const formattedMeetup = response.data.map(meetup => ({
          ...meetup,
          formattedData: format(
            parseISO(meetup.schedule),
            "d 'de' MMMM ', às' HH:mm'h'",
            {
              locale: ptBR,
            }
          ),
          subscribed: !!subscribedEventsID.includes(meetup.id),
        }));

        if(page > 0){
          setMeetups([...meetups, ...formattedMeetup]);
          setRefreshing(false);
        }else{
          setMeetups(formattedMeetup);
        }
        setLoading(false);
      } else {
        setMeetups([]);
        setLoading(false);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possivel carregar as meetups');
    }
  }

  useEffect(() => {
    if (isFocused) {
      loadavailableMeetups();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, date]);

  useEffect(() => {
    loadavailableMeetups();
  }, [page]);

  function loadMore(){
    if (refreshing) return;
        setRefreshing(true);
    setPage(page+1);

  }

  return (
    <Background>
      <Header navigation={navigation} />

      <Container>
        <DateSelector>
          <DateButton onPress={() => setDate(subDays(date, 1))}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </DateButton>
          <TextDate>{dateFormated}</TextDate>
          <DateButton onPress={() => setDate(addDays(date, 1))}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </DateButton>
        </DateSelector>
        {(loading) ? (
          <Spinner>
            <ActivityIndicator size="large" color="#F00" />
          </Spinner>):null
          }
        {meetups.length ? (
          <>

          <List
            data={meetups}
            onEndReached={!uniquePage && loadMore}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetups meetupData={item} reloadMeetups={loadavailableMeetups} />
            )}
          />
          {refreshing && (
              <Spinner>
                <ActivityIndicator size="large" color="#fff" />
              </Spinner>
            )}
          </>
        ) : (
          <NoMeetups>
            <Icon name="event-busy" size={64} color="#F00" />
            <NoMeetupsText>Nenhum Meetup nesta data.</NoMeetupsText>
          </NoMeetups>
        )}
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
