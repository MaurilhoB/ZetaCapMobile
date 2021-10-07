import React from 'react';

import ThemeProvider from './theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AppProvider: React.FC = ({ children }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>{children}</ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default AppProvider;
