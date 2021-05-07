import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { Container, PlantName } from './styles';

interface PlantData {
  name: string;
  photo: string;
}

interface PlantProps extends RectButtonProperties {
  data: PlantData;
}
export const PlantCardPrimary: React.FC<PlantProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <PlantName>{data.name}</PlantName>
    </Container>
  );
};
