import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Auth from './src/screens/Auth';
import { LogInProvider } from './src/context/login';
import AppNavigation from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import OrderStack from './src/navigation/OrdersStack';

export default function App() {
  return (
    <LogInProvider>
      <PaperProvider>
        <Auth />
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PaperProvider>
    </LogInProvider>
  );
}
