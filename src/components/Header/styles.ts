import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Image = styled.Image`
  width: 80px;
  background-color: ${(props) => props.theme.colors.heading};
  height: 80px;
  border-radius: 40px;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.heading};
  line-height: 40px;
`;

export const AvatarContainer = styled(RectButton)`
  background-color: ${(props) => props.theme.colors.shape};
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
