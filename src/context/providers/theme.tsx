import React, { createContext, useCallback } from 'react';
import useStoragedState from '../hooks/useStoragedState';
import {
  DefaultTheme,
  ThemeProvider as SThemeProvider,
} from 'styled-components';

import { useColorScheme } from 'react-native';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

interface IThemeContextData {
  theme: DefaultTheme;
  toggleTheme(): void;
}

export const ThemeContext = createContext<IThemeContextData>(
  {} as IThemeContextData,
);

const ThemeProvider: React.FC = ({ children }) => {
  const usertheme = useColorScheme();

  const [theme, setTheme] = useStoragedState<DefaultTheme>(
    '@AppName:theme',
    usertheme === 'dark' ? dark : light,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SThemeProvider theme={theme}>{children}</SThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
