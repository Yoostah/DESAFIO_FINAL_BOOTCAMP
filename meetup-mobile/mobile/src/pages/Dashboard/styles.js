import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const DateSelector = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: center;
  margin-top: 30px;
`;

export const DateButton = styled.TouchableOpacity``;

export const TextDate = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin: 0 15px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const NoMeetups = styled.View`
  padding: 20px;
  margin-top:30px;
  align-items: center;
  justify-content: center;
`;

export const NoMeetupsText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 18px;
  line-height: 20px;
  text-align: center;
`;
