import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../../components/Button';
import { Container, Content, Emoji, Footer, Subtitle, Title } from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};
export const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    buttonTitle,
    icon,
    nextScreen,
    subtitle,
    title,
  } = route.params as Params;
  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Footer>
          <Button onPress={handleMoveOn} title={buttonTitle} />
        </Footer>
      </Content>
    </Container>
  );
};
