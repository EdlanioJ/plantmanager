import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${(props) => props.theme.colors.button.background};
  border-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
  margin: 10px;
`;

export const PlantName = styled.Text`
  color: ${(props) => props.theme.colors.button.text};
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
  margin: 10px;
`;
