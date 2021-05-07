import { RectButton, Swipeable } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled(Swipeable)`
  width: 100%;
`;
export const Container = styled(RectButton)`
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.shape};
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.heading};
  margin: 17px;
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.body_dark};
`;

export const RemoveButton = styled(RectButton)`
  width: 100px;
  height: 85px;
  background-color: ${(props) => props.theme.colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  padding-left: 15px;
`;
