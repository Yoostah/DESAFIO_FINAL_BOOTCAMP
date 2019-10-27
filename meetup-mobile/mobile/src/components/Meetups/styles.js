import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const MeetupData = styled.View`
  align-self: center;
  width: 295px;
  padding: 20px;
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const TextArea = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const TextInfo = styled.Text`
  font-size: 13px;
  color: #999;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const ButtonSubmit = styled(Button)`
  margin: 0 20px;
`;

export const PastEvent = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  margin: 38px 0 -20px;
`;

export const PastEventText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 0 5px;
  color: ${props => (props.owner ? '#000' : '#e5556e')};
`;

export const SubscribedEvent = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background: rgba(0, 255, 0, 0.1);
  padding: 5px 0;
  margin: 38px 0 -20px;
`;

export const SubscribedEventText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 0 5px;
  color: #07d600;
`;
