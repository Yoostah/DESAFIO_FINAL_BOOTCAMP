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
