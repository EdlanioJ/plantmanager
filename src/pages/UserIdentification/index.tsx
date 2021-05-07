import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Content,
  Emoji,
  Footer,
  Form,
  Header,
  Input,
  KeyboardAvoidingView,
  Title,
} from './styles';
import { Button } from '../../components/Button';

export const UserIdentification: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();
  const theme = useTheme();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if (!name) return Alert.alert('me diz como chamar você');

    await AsyncStorage.setItem('@plantmanager:user:name', name);
    navigation.navigate('UserImageIdentification');
  }
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😄' : '😀'}</Emoji>
                <Title>
                  Como podemos{'\n'}
                  chamar você?
                </Title>
              </Header>
              <Input
                placeholder="Digite um nome"
                placeholderTextColor={theme.colors.heading}
                isFilled={isFilled}
                onChangeText={handleInputChange}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
              />
              <Footer>
                <Button
                  disabled={!isFilled}
                  title="Confirmar"
                  onPress={handleSubmit}
                />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};
