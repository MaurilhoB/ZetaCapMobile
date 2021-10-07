import React from 'react';
import AppProvider from './context/providers';
import Routes from './routes';

import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => (
  <NavigationContainer>
    <AppProvider>
      <Routes />
    </AppProvider>
  </NavigationContainer>
);

export default App;
