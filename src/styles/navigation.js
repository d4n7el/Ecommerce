import { StyleSheet } from "react-native";
import colors from "./colors";

const navigationStyle = StyleSheet.create({
  navContainer: {
    backgroundColor: "red",
  },
  icon: {
    fontSize: 20,
    color: colors.light,
  },
  barStyle: {
    borderWidth: 0.5,
    borderBottomWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "transparent",
    overflow: "hidden",
    backgroundColor: colors.primary,
    paddingBottom: 5,
  },
});

export default navigationStyle;
