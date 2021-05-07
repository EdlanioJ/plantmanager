import React, { useCallback, useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Budge, Container, Image, IconContainer } from './styles';
import { useUser } from '../../context/user';

export const Avatar: React.FC = () => {
  const { getItem, setItem } = useAsyncStorage('@plantmanager:user:avatar');
  const [image, setImage] = useState<string>();
  const { colors } = useTheme();
  const { user, updateAvatar } = useUser();

  const handleGetImage = useCallback(async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: false,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (!result.cancelled) {
        await setItem(result.uri);
        updateAvatar(result.uri);
        setImage(result.uri);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setImage(user.avatar);
  }, []);

  return (
    <Container style={{ elevation: 2 }}>
      {image ? (
        <Image source={{ uri: image }} />
      ) : (
        <IconContainer>
          <Feather name="user" size={75} color={colors.heading} />
        </IconContainer>
      )}
      <Budge onPress={handleGetImage}>
        <Feather name="camera" size={18} color={colors.heading} />
      </Budge>
    </Container>
  );
};
