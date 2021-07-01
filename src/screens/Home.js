import React from "react";
import { View, Text } from "react-native";
import { layoutStyle } from "../styles";
import { UseLogin } from "../context/login";

const Home = () => {
  const { logOut } = UseLogin();
  return (
    <View style={layoutStyle.containerPrimary}>
      <Text
        onPress={() => {
          logOut();
        }}
      >
        estamos en home
      </Text>
    </View>
  );
};

export default Home;
