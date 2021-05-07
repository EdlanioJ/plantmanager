import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: ${(props) => props.theme.colors.shape};
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Image = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 65px;
`;

export const Budge = styled(RectButton)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.shape};

  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const IconContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  width: 130px;
  height: 130px;
  border-radius: 65px;

  align-items: center;
  justify-content: center;
`;
