import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.button.background
      : props.theme.colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.button.text};
`;
