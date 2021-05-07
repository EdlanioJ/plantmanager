import { ScrollView, TouchableOpacity } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Wrapper = styled(ScrollView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.shape};
`;

export const PlantName = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 24px;
  color: ${(props) => props.theme.colors.heading};
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.heading};
  font-size: 17px;
  margin-top: 10px;
`;

export const Controller = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
`;

export const TipController = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.blue};
  font-size: 17px;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.complement};
  color: ${(props) => props.theme.colors.heading};
  font-size: 17px;
  margin-bottom: 5px;
`;

export const DateTimePickerButton = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const DateTimePickerText = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.text};
`;
