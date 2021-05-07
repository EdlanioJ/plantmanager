import React from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components/native';

import {
  Content,
  Container,
  Empty,
  Header,
  HeaderButton,
  Switch,
  Title,
  Text,
  UserDetails,
} from './styles';
import { Avatar } from '../../components/Avatar';
import { useSwitchTheme } from '../../context/theme';
import { useUser } from '../../context/user';

export const UserDetail: React.FC = () => {
  const { user } = useUser();
  const { toggleTheme } = useSwitchTheme();

  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header style={{ elevation: 2 }}>
        <HeaderButton onPress={handleGoBack}>
          <Feather name="arrow-left" size={20} color={theme.colors.heading} />
        </HeaderButton>
        <Title>Detalhes</Title>
        <Empty />
      </Header>
      <Content>
        <Avatar />
        <UserDetails>
          <Text bold>{user.username}</Text>
        </UserDetails>
        <UserDetails>
          <Text>Tema escuro</Text>
          <Switch
            onValueChange={(value) => toggleTheme(value ? 'dark' : 'light')}
            value={theme.mode === 'dark'}
            trackColor={{
              false: theme.colors.shape,
              true: theme.colors.shape,
            }}
            thumbColor={
              theme.mode === 'dark'
                ? theme.colors.primary
                : theme.colors.heading
            }
          />
        </UserDetails>
      </Content>
    </Container>
  );
};
