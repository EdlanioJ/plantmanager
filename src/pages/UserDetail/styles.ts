import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Header = styled.View`
  flex: 1;
  max-height: 96px;
  background-color: ${(props) => props.theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: ${Constants.statusBarHeight + 15 + 'px'};
`;

export const HeaderButton = styled(RectButton)`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const Empty = styled.View`
  height: 36px;
  width: 36px;
  background-color: transparent;
`;

export const Title = styled.Text`
  font-size: 20px;
  padding-top: 3px;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.heading};
`;

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: 'center',
    flex: 1,
  },
})`
  flex: 1;
  padding-top: 20px;
`;

export const UserDetails = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  max-height: 64px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.shape};

  padding-top: 20px;
  padding-bottom: 20px;

  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
`;

export const Text = styled.Text<{ bold?: boolean }>`
  font-family: ${(props) =>
    props.bold ? props.theme.fonts.heading : props.theme.fonts.text};
  color: ${(props) => props.theme.colors.heading};

  font-size: 18px;
`;

export const Switch = styled.Switch``;
