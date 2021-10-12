import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../screens/Main';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { useTheme } from '../context/hooks/useTheme';
import { StatusBar } from 'react-native';
import Market from '../screens/Market';

const TabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontFamily: 'Nunito-Regular',
        },
        tabBarInactiveTintColor: theme.colors.text_secondary,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Main':
              iconName = 'trending-up';
              break;
            case 'Preferences':
              iconName = 'build-outline';
              break;
            case 'Converter':
              iconName = 'md-sync';
              break;
            default:
              iconName = '';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Stack.Screen
        options={{
          title: 'Mercados',
          headerShown: false,
        }}
        name="Main"
        component={Main}
      />
      <Stack.Screen
        options={{
          title: 'Conversor',
          headerShown: false,
        }}
        name="Converter"
        component={Main}
      />
      <Stack.Screen
        options={{
          title: 'Preferencias',
          headerShown: false,
        }}
        name="Preferences"
        component={Main}
      />
    </Tab.Navigator>
  );
};

const Routes: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.title === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Root"
          component={TabNavigator}
        />

        <Stack.Screen name="Market" component={Market} />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
