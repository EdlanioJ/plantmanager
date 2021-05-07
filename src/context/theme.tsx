import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  Appearance,
  AppearanceProvider,
  ColorSchemeName,
} from 'react-native-appearance';

import { light, dark } from '../styles/theme';
import { StatusBar } from 'expo-status-bar';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

interface ThemeContextProps {
  toggleTheme: (mode: ColorSchemeName) => void;
  mode: ColorSchemeName;
}

const defaultMode = Appearance.getColorScheme() || 'light';

const ThemeContext = createContext({} as ThemeContextProps);

export function useSwitchTheme() {
  const context = useContext(ThemeContext);

  return context;
}

const ManageThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<ColorSchemeName>();
  const { getItem, setItem } = useAsyncStorage('@plantmanager:theme');

  const toggleTheme = useCallback(async (mode: ColorSchemeName) => {
    setMode(mode);
    await setItem(String(mode));
  }, []);

  useEffect(() => {
    async function loadTheme() {
      const theme = await getItem();

      if (theme) {
        setMode(theme === 'light' ? 'light' : 'dark');
        return;
      }

      setMode(defaultMode);
    }

    loadTheme();
  }, []);

  useEffect(() => {
    let subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setMode(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  if (!mode) {
    return <AppLoading />;
  }
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={mode === 'dark' ? dark : light}>
        <>
          <StatusBar
            backgroundColor="transparent"
            style={mode === 'light' ? 'dark' : 'light'}
          />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeManager: React.FC = ({ children }) => (
  <AppearanceProvider>
    <ManageThemeProvider>{children}</ManageThemeProvider>
  </AppearanceProvider>
);

export default ThemeManager;
