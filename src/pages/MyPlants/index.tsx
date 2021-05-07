import React, { useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { formatDistance } from 'date-fns/esm';
import { useNavigation } from '@react-navigation/core';
import { pt } from 'date-fns/locale';

import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';

import waterDrop from '../../assets/waterdrop.png';

import { loadPlant, PlantProps, removePlant } from '../../libs/storage';
import {
  Box,
  BoxText,
  Container,
  Plants,
  PlantsTitle,
  Spotlight,
  SpotlightImage,
  SpotlightText,
} from './styles';

export const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();
  const navigation = useNavigation();

  function handleRemove(plant: PlantProps) {
    Alert.alert('remover', `Deseja remover à ${plant.name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await removePlant(String(plant.id));

            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch (error) {
            Alert.alert('Não foi possível remover');
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function loadStorageData() {
      try {
        const plantsStoraged = await loadPlant();

        if (!plantsStoraged.length) {
          setNextWatered('Não têm nenhuma planta para regar.');
        } else {
          const nextTime = formatDistance(
            new Date(plantsStoraged[0].dateTimeNotification).getTime(),
            new Date().getTime(),
            { locale: pt }
          );

          setNextWatered(
            `Não esqueça de regar a ${plantsStoraged[0].name} em ${nextTime}.`
          );
        }

        setMyPlants(plantsStoraged);
        setIsLoading(false);
        navigation.setOptions({ tabBarVisible: true });
      } catch (error) {
        console.error(error);
      }
    }
    loadStorageData();
  }, []);

  if (isLoading) return <Load />;

  return (
    <Container>
      <Header />
      <Spotlight>
        <SpotlightImage source={waterDrop} />
        <SpotlightText>{nextWatered}</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              handleRemove={() => handleRemove(item)}
              data={item}
            />
          )}
          ListEmptyComponent={() => (
            <Box>
              <BoxText>Ainda não adicionou nenhuma planta</BoxText>
            </Box>
          )}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{ marginTop: 10 }}
        />
      </Plants>
    </Container>
  );
};
