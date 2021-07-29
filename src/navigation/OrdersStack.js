import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import DetailOrder from '../screens/order/DetailOrder';
import Order from '../screens/account/Order';

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator initialRouteName="orders">
      <Stack.Screen
        name="orders"
        component={Order}
        options={{ title: 'Mis pedidos', headerShown: false }}
      />
      <Stack.Screen
        name="detail_orders"
        component={DetailOrder}
        options={{ title: 'Home', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
