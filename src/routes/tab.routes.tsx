import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

import { MyPlants } from '../pages/MyPlants';
import { PlantSelect } from '../pages/PlantSelect';

const { Navigator, Screen } = createBottomTabNavigator();

const AuthRoutes: React.FC = () => {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{ tabBarVisible: false }}
      tabBarOptions={{
        labelStyle: {
          fontFamily: theme.fonts.heading,
        },
        activeTintColor: theme.colors.green,
        inactiveTintColor: theme.colors.heading,
        labelPosition: 'beside-icon',
        style: {
          borderTopColor: theme.colors.background,
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.background,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 68,
        },
      }}
    >
      <Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Minhas Planta"
        component={MyPlants}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AuthRoutes;
