import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';

import api from '../../services/api';
import { PlantProps } from '../../libs/storage';
import {
  Container,
  Top,
  Title,
  Subtitle,
  EnvironmentList,
  Plants,
  Separator,
} from './styles';
import { EnvironmentButton } from '../../components/EnvironmentButton';

interface EnvironmentProps {
  key: string;
  title: string;
}

export const PlantSelect: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(true);

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all') return setFilteredPlants(plants);

    const filtered = plants.filter((plant) =>
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered);
  }

  function handlePlantSelected(plant: PlantProps) {
    navigation.navigate('PlantSave', { plant });
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&order=asc&_page=${page}&_limit=8`
    );

    if (!data) return setIsLoading(true);

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    navigation.setOptions({ tabBarVisible: true });
    setIsLoading(false);
    setLoadingMore(false);
  }
  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        'plants_environments?_sort=title&order=asc'
      );
      setEnvironments([{ key: 'all', title: 'Todos' }, ...data]);
    }

    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  function handleFetchMore(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  if (isLoading) {
    return <Load />;
  }
  return (
    <Container>
      <Top>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </Top>
      <View>
        <EnvironmentList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              active={item.key === environmentSelected}
              title={item.title}
              onPress={() => {
                handleEnvironmentSelected(item.key);
              }}
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </View>

      <Plants>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              onPress={() => handlePlantSelected(item)}
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator color={theme.colors.primary} />
            ) : (
              <></>
            )
          }
        />
      </Plants>
    </Container>
  );
};
