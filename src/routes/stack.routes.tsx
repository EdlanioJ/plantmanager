import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { useTheme } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';
import { Welcome } from '../pages/Welcome';
import { PlantSave } from '../pages/PlantSave';
import { UserImageIdentification } from '../pages/UserImageIdentification';
import { UserDetail } from '../pages/UserDetail';

import AuthRoutes from './tab.routes';
import { useUser } from '../context/user';
import { Start } from '../pages/Start';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  const { isSignedIn } = useUser();
  const { colors } = useTheme();

  if (isSignedIn === undefined) {
    return <AppLoading />;
  }
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        stackAnimation: 'fade',
        stackPresentation: 'fullScreenModal',
        contentStyle: {
          flex: 1,
          backgroundColor: colors.background,
        },
      }}
    >
      {isSignedIn ? (
        <>
          <Screen name="PlantSelect" component={AuthRoutes} />
          <Screen name="UserDetail" component={UserDetail} />
          <Screen name="Confirmation" component={Confirmation} />

          <Screen name="PlantSave" component={PlantSave} />
          <Screen name="MyPlants" component={AuthRoutes} />
        </>
      ) : (
        <>
          <Screen name="Welcome" component={Welcome} />
          <Screen name="UserIdentification" component={UserIdentification} />
          <Screen
            name="UserImageIdentification"
            component={UserImageIdentification}
          />
          <Screen name="Start" component={Start} />
        </>
      )}
    </Navigator>
  );
};

export default AppRoutes;
