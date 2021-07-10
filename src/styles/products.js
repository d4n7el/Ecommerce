import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "./colors";

const productStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
  },
  containerProduct: {
    width: "46%",
    paddingLeft: 0,
    paddingRight: 0,
    margin: 8,
    shadowColor: "transparent",
    borderColor: "transparent",
    borderRadius: 20,
  },
  infoFooter: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  info: {
    color: colors.primary,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  subTitleInfo: {
    color: colors.opaque,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 13,
  },
  infoPrice: {
    color: colors.third,
    fontSize: 12,
    marginTop: 10,
    fontWeight: "bold",
  },
  image: {
    height: 80,
  },
  titlePrimary: {
    color: colors.primary,
    fontSize: 30,
    marginTop: 28,
    marginLeft: 38,
  },
  containerImg: {
    width: 200,
    height: 200,
  },
  containerThumbnail: {
    width: 100,
    height: 100,
  },
  containerLikes: {
    marginTop: 0,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 10,
  },
  containerSizes: {
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
  likesLabel: {
    fontSize: 16,
    color: colors.opaque,
  },
  numberLikes: {
    fontSize: 21,
    color: colors.primary,
    fontWeight: "bold",
  },
  iconSize: {
    backgroundColor: colors.opaque,
    color: colors.primary,
    borderColor: colors.primary,
  },
  iconSizeActive: {
    backgroundColor: colors.secondary,
    color: colors.primary,
    borderColor: colors.primary,
    borderRadius: 3,
  },
  labelSize: {
    color: colors.primary,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  labelIconSize: {
    color: colors.applicationBackground,
  },
  labelQuantity: {
    fontSize: 20,
    textAlign: "center",
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default productStyle;
