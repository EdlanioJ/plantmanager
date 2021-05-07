import React, { useEffect } from 'react';

import * as Notification from 'expo-notifications';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';
import ThemeManager from './src/context/theme';
import { UserProvider } from './src/context/user';

export default function App() {
  const [fontLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notification.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );

    return () => subscription.remove();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeManager>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ThemeManager>
  );
}
