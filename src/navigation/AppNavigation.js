import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import { UseLogin } from "../context/login";
import { navigationStyle } from "../styles";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import AccountStack from "./AccountStack";
import ProductStack from "./ProductStack";
import Favorites from "../screens/account/Favorites";

const Tab = createMaterialBottomTabNavigator();

export const AppNavigation = () => {
  const { auth } = UseLogin();
  if (!auth) {
    return null;
  }
  return (
    auth && (
      <NavigationContainer style={navigationStyle.navContainer}>
        <Tab.Navigator
          barStyle={navigationStyle.barStyle}
          screenOptions={({ route }) => ({
            tabBarIcon: (routeStatus) => {
              return setIcon(route, routeStatus);
            },
          })}
        >
          <Tab.Screen
            name="home"
            component={ProductStack}
            options={{ title: "Home" }}
          ></Tab.Screen>
          <Tab.Screen
            name="favorites"
            component={Favorites}
            options={{ title: "Favoritos" }}
          ></Tab.Screen>
          <Tab.Screen
            name="account"
            component={AccountStack}
            options={{ title: "Cuenta" }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  );
};

export default AppNavigation;

const setIcon = (route, routeStatus) => {
  let iconName = "";
  switch (route.name) {
    case "home":
      iconName = "home";
      break;
    case "account":
      iconName = "bars";
      break;
    case "favorites":
      iconName = "heart";
      break;
    default:
      break;
  }
  return <AwesomeIcon name={iconName} style={navigationStyle.icon} />;
};
