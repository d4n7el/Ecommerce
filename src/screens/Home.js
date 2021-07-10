import React from "react";
import { View, Text, ScrollView } from "react-native";
import { layoutStyle } from "../styles";
import { UseLogin } from "../context/login";
import Search from "../components/search/Index";
import StatusBarCustom from "../components/statusBar/Index";
import NewProducts from "../components/products/NewProducts";

const Home = () => {
  const { logOut } = UseLogin();
  return (
    <>
      <StatusBarCustom />
      <Search />
      <ScrollView style={layoutStyle.padding5}>
        <NewProducts />
      </ScrollView>
    </>
  );
};

export default Home;
