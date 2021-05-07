import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;
export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 38px;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  margin-top: 34px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.text};
  line-height: 20px;
  font-size: 18px;
  padding-right: 20px;
  padding-left: 20px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.green};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 16px;
  height: 56px;
  width: 56px;
`;

export const Image = styled.Image`
  height: ${width * 0.7}px;
`;

export const ButtonIcon = styled(Feather)`
  color: ${(props) => props.theme.colors.white};
  font-size: 32px;
`;
