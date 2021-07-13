import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import ViewProduct from "../screens/products/ViewProduct";
import Home from "../screens/Home";
import SearchProducts from "../screens/products/SearchProducts";

const Stack = createStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
        headerStyle: { backgroundColor: colors.applicationBackground },
        cardStyle: { backgroundColor: colors.applicationBackground },
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="product"
        component={ViewProduct}
        options={{ title: "Product", headerShown: false }}
      />
      <Stack.Screen
        name="search"
        component={SearchProducts}
        options={{ title: "Product", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
