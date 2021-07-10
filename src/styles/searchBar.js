import { StyleSheet } from "react-native";
import colors from "./colors";

const searchBarStyle = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.applicationBackground,
    paddingHorizontal: 30,
    paddingVertical: 10,
    zIndex: 1,
  },
  statusBarCustom: {
    backgroundColor: colors.applicationBackground,
  },
  safeAreaView: {
    flex: 0,
    backgroundColor: colors.applicationBackground,
  },
  search: {
    borderRadius: 20,
    height: 34,
    shadowColor: "transparent",
  },
});

export default searchBarStyle;
