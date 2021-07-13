import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account";
import ChangePassword from "../screens/account/ChangePassword";
import ChangeName from "../screens/account/UpdateProfile";
import colors from "../styles/colors";
import Address from "../screens/account/Address";
import AddAddress from "../screens/account/AddAddress";

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
        headerStyle: { backgroundColor: colors.applicationBackground },
        cardStyle: { backgroundColor: colors.applicationBackground },
      }}
    >
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta", headerShown: false }}
      />
      <Stack.Screen
        name="change_password"
        component={ChangePassword}
        options={{ title: "Change password" }}
      />
      <Stack.Screen
        name="update_info"
        component={ChangeName}
        options={{ title: "Actualizar información" }}
      />
      <Stack.Screen
        name="address"
        component={Address}
        options={{ title: "Manage addresses" }}
      />
      <Stack.Screen
        name="addAddress"
        component={AddAddress}
        options={{ title: "Manage addresses" }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
