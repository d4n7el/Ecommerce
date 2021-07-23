import { StyleSheet } from "react-native";
import colors from "./colors";

const layoutStyle = StyleSheet.create({
  content1: {
    flex: 1,
    width: "100%",
  },
  containerPrimary: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerCenter: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
  },
  containerInLine: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-start",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  centerInLineBetWeen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  centerInLineBetWeenBase: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  alignItemsEnd: {
    flex: 1,
    alignItems: "flex-end",
  },
  centerInLine: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  bgOrange: {
    backgroundColor: "orange",
  },
  bgSecondary: {
    backgroundColor: colors.secondary,
  },
  bgPrimary: {
    backgroundColor: colors.primary,
  },
  bgAplication: {
    backgroundColor: colors.applicationBackground,
  },
  widthAll: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },
  widthMed: {
    flex: 1,
    width: "50%",
    resizeMode: "contain",
  },
  button: {
    marginTop: 6,
  },
  buttonContained: {
    backgroundColor: colors.primary,
  },
  buttonSuccess: {
    backgroundColor: colors.third,
    color: colors.opaque,
  },
  buttonWarning: {
    borderColor: colors.warning,
  },
  buttonOutlined: {
    backgroundColor: "transparent",
    borderColor: colors.primary,
  },
  buttonIconTransparent: {
    maxWidth: 10,
    backgroundColor: "red",
  },
  iconLike: {
    backgroundColor: "transparent",
  },
  iconColor: {
    backgroundColor: "transparent",
  },
  iconColorWhite: {
    backgroundColor: colors.opaque,
    marginTop: 2,
    marginRight: 3,
  },
  colorThird: { color: colors.third },
  padding40: {
    padding: 40,
  },
  padding20: {
    padding: 20,
  },
  padding5: {
    padding: 5,
  },
  padding2: {
    padding: 2,
  },
  marginRight5: {
    marginRight: 5,
  },
  title: {
    color: colors.primary,
    fontSize: 19,
    marginTop: 8,
    textAlign: "center",
  },
  hidden: {
    display: "none",
  },
  displayNone: {
    display: "none",
  },
  bold: {
    fontWeight: "bold",
  },
});

export default layoutStyle;
