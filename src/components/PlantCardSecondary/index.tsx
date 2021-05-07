import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Animated, View } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { SvgFromUri } from 'react-native-svg';

import {
  Container,
  Details,
  RemoveButton,
  Title,
  TimeLabel,
  Time,
  Wrapper,
} from './styles';

interface PlantData {
  name: string;
  photo: string;
  hour: string;
}

interface PlantProps extends RectButtonProperties {
  data: PlantData;
  handleRemove: () => void;
}
export const PlantCardSecondary: React.FC<PlantProps> = ({
  data,
  handleRemove,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Wrapper
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RemoveButton onPress={handleRemove}>
              <Feather name="trash" size={32} color={theme.colors.white} />
            </RemoveButton>
          </View>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Title>{data.name}</Title>
        <Details>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{data.hour}</Time>
        </Details>
      </Container>
    </Wrapper>
  );
};
