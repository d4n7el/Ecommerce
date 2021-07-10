import React from "react";
import { View, Text } from "react-native";
import { StatusBar, SafeAreaView } from "react-native";
import { searchBarStyle } from "../../styles";
import colors from "../../styles/colors";

const StatusBarCustom = () => {
  return (
    <>
      <SafeAreaView style={searchBarStyle.safeAreaView} />
      <StatusBar
        style={searchBarStyle.statusBarCustom}
        barStyle="dark-content"
      />
    </>
  );
};

export default StatusBarCustom;
