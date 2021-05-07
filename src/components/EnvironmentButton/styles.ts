import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.button.background
      : props.theme.colors.shape};
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const Title = styled.Text<{ isActive: boolean }>`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) =>
    props.isActive ? props.theme.colors.green : props.theme.colors.heading};
`;
