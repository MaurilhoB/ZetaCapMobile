import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import PreferencesProvider from './preferences';
import ThemeProvider from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PreferencesProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </PreferencesProvider>
    </GestureHandlerRootView>
  );
};

export default AppProvider;
