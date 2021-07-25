import { StyleSheet } from "react-native";
import colors from "./colors";

const messageStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    padding: 20,
  },
  icon: {
    shadowColor: colors.dark,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 19,
    shadowOpacity: 0.4,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});

export default messageStyle;
