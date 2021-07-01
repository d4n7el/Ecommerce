import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Auth from "./src/screens/Auth";
import { LogInProvider } from "./src/context/login";
import AppNavigation from "./src/navigation/AppNavigation";
export default function App() {
  return (
    <LogInProvider>
      <PaperProvider>
        <Auth />
        <AppNavigation />
      </PaperProvider>
    </LogInProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
