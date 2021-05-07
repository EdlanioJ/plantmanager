import React from 'react';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../../assets/watering.png';

import {
  Button,
  ButtonIcon,
  Container,
  Image,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

export const Welcome: React.FC = () => {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie{'\n'}
          suas plantas de{'\n'}
          forma fácil
        </Title>
        <Image source={wateringImg} resizeMode="contain" />

        <Subtitle>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Subtitle>
        <Button onPress={handleStart} activeOpacity={0.8}>
          <ButtonIcon name="chevron-right" />
        </Button>
      </Wrapper>
    </Container>
  );
};
