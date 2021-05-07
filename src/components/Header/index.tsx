import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { useUser } from '../../context/user';

import {
  Container,
  Greeting,
  UserName,
  Avatar,
  AvatarContainer,
} from './styles';

export const Header: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useUser();
  const { colors } = useTheme();

  function handleNavigateToUserDetail() {
    navigation.navigate('UserDetail');
  }

  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>{user.username}</UserName>
      </View>
      <AvatarContainer onPress={handleNavigateToUserDetail}>
        {user.avatar ? (
          <Avatar source={{ uri: user.avatar }} />
        ) : (
          <Feather name="user" size={54} color={colors.heading} />
        )}
      </AvatarContainer>
    </Container>
  );
};
