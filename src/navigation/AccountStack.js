import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/account/Index';
import ChangePassword from '../screens/account/ChangePassword';
import ChangeName from '../screens/account/UpdateProfile';
import colors from '../styles/colors';
import Address from '../screens/account/Address';
import AddAddress from '../screens/account/AddAddress';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.primary },
        cardStyle: { backgroundColor: colors.white },
      }}
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
        options={{ title: 'Administrar direcciones' }}
      />
      <Stack.Screen
        name="addAddress"
        component={AddAddress}
        options={{ title: 'Crear nueva direccion' }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
