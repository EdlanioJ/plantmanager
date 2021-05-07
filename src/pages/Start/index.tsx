import React from 'react';

import { Button } from '../../components/Button';
import { Container, Content, Emoji, Footer, Subtitle, Title } from './styles';
import { useUser } from '../../context/user';

export const Start: React.FC = () => {
  const { signIn } = useUser();

  return (
    <Container>
      <Content>
        <Emoji>{'😄'}</Emoji>
        <Title>Prontinho</Title>
        <Subtitle>Agora vamos começar a cuidar das suas plantinhas</Subtitle>
        <Footer>
          <Button onPress={signIn} title="Começar" />
        </Footer>
      </Content>
    </Container>
  );
};
