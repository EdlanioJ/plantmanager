import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Container, Title, Header, Footer } from './styles';

export const UserImageIdentification: React.FC = () => {
  const navigation = useNavigation();

  async function handleSubmit() {
    navigation.navigate('Start');
  }

  return (
    <Container>
      <Header>
        <Title>Escolha uma{'\n'}Imagem</Title>
        <Avatar />
      </Header>
      <Footer>
        <Button title="Confirmar" onPress={handleSubmit} />
      </Footer>
    </Container>
  );
};
