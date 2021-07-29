import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { UseLogin } from '../context/login';
import { navigationStyle } from '../styles';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AccountStack from './AccountStack';
import ProductStack from './ProductStack';
import Favorites from '../screens/account/Favorites';
import OrderStack from './OrdersStack';

const Tab = createMaterialBottomTabNavigator();

export const AppNavigation = () => {
  const { auth } = UseLogin();
  if (!auth) {
    return null;
  }
  return (
    auth && (
      <>
        <Tab.Navigator
          barStyle={navigationStyle.barStyle}
          screenOptions={({ route }) => ({
            tabBarIcon: (routeStatus) => {
              return setIcon(route);
            },
          })}
        >
          <Tab.Screen
            name="home"
            component={ProductStack}
            options={{ title: 'Home' }}
          ></Tab.Screen>
          <Tab.Screen
            name="favorites"
            component={Favorites}
            options={{ title: 'Favoritos' }}
          ></Tab.Screen>
          <Tab.Screen
            name="orders"
            component={OrderStack}
            options={{ title: 'pedidos', headerShown: false }}
          ></Tab.Screen>
          <Tab.Screen
            name="account"
            component={AccountStack}
            options={{ title: 'Cuenta', headerShown: false }}
          ></Tab.Screen>
        </Tab.Navigator>
      </>
    )
  );
};

export default AppNavigation;

const setIcon = (route) => {
  let iconName = '';
  switch (route.name) {
    case 'home':
      iconName = 'home';
      break;
    case 'account':
      iconName = 'bars';
      break;
    case 'favorites':
      iconName = 'heart';
      break;
    case 'orders':
      iconName = 'shopping-basket';
      break;
    default:
      break;
  }
  return <AwesomeIcon name={iconName} style={navigationStyle.icon} />;
};
