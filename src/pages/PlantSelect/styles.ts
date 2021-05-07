import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { PlantProps } from '../../libs/storage';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Top = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.heading};
`;

interface EnvironmentProps {
  key: string;
  title: string;
}

export const Separator = styled.View`
  width: 20px;
  height: 10px;
`;

export const EnvironmentList = styled(
  FlatList as new () => FlatList<EnvironmentProps>
).attrs({
  contentContainerStyle: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginVertical: 32,
    paddingHorizontal: 32,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Plants = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: center;
`;

export const PlantsList = styled(
  FlatList as new () => FlatList<PlantProps>
).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})``;
