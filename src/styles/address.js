import { StyleSheet } from "react-native";
import colors from "./colors";

const addressStyle = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  addAddress: {
    borderWidth: 0.9,
    borderRadius: 5,
    borderColor: colors.opaque,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addressTex: {
    fontSize: 15,
  },
  titleSelect: {
    color: colors.primary,
    fontSize: 19,
    marginTop: 8,
    textAlign: "center",
  },
  containerList: {
    flex: 1,
    width: "100%",
  },
  itemList: {
    backgroundColor: colors.white,
    width: "100%",
    borderColor: colors.light,
    borderWidth: 1,
    padding: 15,
    marginTop: 6,
    borderRadius: 4,
  },
  itemListSelected: {
    backgroundColor: colors.light,
    width: "100%",
    borderColor: colors.light,
    borderWidth: 1,
    padding: 15,
    marginTop: 6,
    borderRadius: 4,
  },
  titleAddress: {
    color: colors.primary,
    marginLeft: 10,
  },
  iconListSelect: {
    marginRight: 10,
  },
  infoAddress: {
    marginTop: 10,
  },
  textInfoAddress: {
    color: colors.opaque,
  },
  textInfoAddressSelected: {
    color: colors.primary,
  },
});

export default addressStyle;
