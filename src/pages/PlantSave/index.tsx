import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { SvgFromUri } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';

import waterDrop from '../../assets/waterdrop.png';

import { PlantProps, savePlant } from '../../libs/storage';
import { Button } from '../../components/Button';
import {
  AlertLabel,
  Container,
  Controller,
  DateTimePickerButton,
  DateTimePickerText,
  PlantAbout,
  PlantInfo,
  PlantName,
  TipController,
  TipImage,
  TipText,
  Wrapper,
} from './styles';
import { useTheme } from 'styled-components/native';

interface Params {
  plant: PlantProps;
}
export const PlantSave: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  const route = useRoute();

  const { plant } = route.params as Params;

  function handleChangeTime(_: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());

      return Alert.alert('escolha uma data no futuro');
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo Bem',
        subtitle:
          'Fique tranquilo sempre vamos lembrar você de cuidar de suas plantas com muito cuidado',
        buttonTitle: 'Muito Obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });
    } catch {
      Alert.alert('não foi possível salvar');
    }
  }
  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <Container>
        <PlantInfo>
          <SvgFromUri uri={plant.photo} width={150} height={150} />
          <PlantName>{plant.name}</PlantName>
          <PlantAbout>{plant.about}</PlantAbout>
        </PlantInfo>
        <Controller>
          <TipController>
            <TipImage source={waterDrop} />
            <TipText>{plant.water_tips}</TipText>
          </TipController>
          <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}
          {Platform.OS === 'android' && (
            <DateTimePickerButton onPress={handleOpenDateTimePickerForAndroid}>
              <DateTimePickerText>{`Mudar ${format(
                selectedDateTime,
                'HH:mm'
              )}`}</DateTimePickerText>
            </DateTimePickerButton>
          )}

          <Button title="Cadastrar planta" onPress={handleSave} />
        </Controller>
      </Container>
      <StatusBar
        backgroundColor={theme.colors.shape}
        style={theme.mode === 'light' ? 'dark' : 'light'}
      />
    </Wrapper>
  );
};
