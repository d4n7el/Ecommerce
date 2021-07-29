import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/account';
import ChangePassword from '../screens/account/ChangePassword';
import ChangeName from '../screens/account/UpdateProfile';
import colors from '../styles/colors';
import Address from '../screens/account/Address';
import AddAddress from '../screens/account/AddAddress';
import Cart from '../screens/account/Cart';
import PaymentMethods from '../screens/account/PaymentMethods';
import NewPaymentMethods from '../components/paymentMethods/new';
import Order from '../screens/account/Order';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
    /*screenOptions={{
        headerTintColor: colors.primary,
        headerStyle: { backgroundColor: colors.applicationBackground },
        cardStyle: { backgroundColor: colors.applicationBackground },
      }}*/
    >
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: 'Cuenta', headerShown: false }}
      />
      <Stack.Screen
        name="change_password"
        component={ChangePassword}
        options={{ title: 'Change password' }}
      />
      <Stack.Screen
        name="update_info"
        component={ChangeName}
        options={{ title: 'Actualizar información' }}
      />
      <Stack.Screen
        name="address"
        component={Address}
        options={{ title: 'Direcciones' }}
      />
      <Stack.Screen
        name="addAddress"
        component={AddAddress}
        options={{ title: 'Direcciones' }}
      />
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{ title: 'Carrito de compras', headerShown: false }}
      />
      <Stack.Screen
        name="payment_methods"
        component={PaymentMethods}
        options={{ title: 'Metodos de pago', headerShown: false }}
      />
      <Stack.Screen
        name="new_payment_methods"
        component={NewPaymentMethods}
        options={{ title: 'añadir metodo de pago', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
