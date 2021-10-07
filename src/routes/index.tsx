import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/Main';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Main}
      />
    </Stack.Navigator>
  );
};

export default Routes;
