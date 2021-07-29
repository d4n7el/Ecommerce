import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './colors';

const orderStyle = StyleSheet.create({
  containerOrder: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,

    elevation: 3,
  },
  iconResume: {
    marginRight: 10,
    marginTop: 5,
  },
  info: {
    color: colors.primary,
    marginLeft: 15,
  },
  avatarProduct: {
    marginTop: 5,
    marginRight: 5,
    width: 40,
    height: 40,
  },
  containerTap: {
    marginTop: 20,
  },
  tapSelected: {
    backgroundColor: colors.secondary,
    maxWidth: 900,
  },
  tapTextSelected: {
    color: colors.white,
  },
  tap: {
    maxWidth: 35,
    overflow: 'hidden',
  },
  statusText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  noteText: {
    position: 'absolute',
    top: 35,
    left: 60,
    color: colors.opaque,
  },
  dateText: {
    position: 'absolute',
    top: 53,
    left: 60,
    color: colors.opaque,
    fontSize: 13,
  },
  containerListStatus: {
    marginTop: 10,
  },
  descriptionText: {
    color: colors.primary,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    marginLeft: 10,
    color: colors.opaque,
  },
  discount: {
    marginLeft: 10,
    color: colors.opaque,
  },
  quantity: {
    marginLeft: 10,
    color: colors.opaque,
  },
  values: {
    color: colors.primary,
  },
  containerProdOrder: {
    marginTop: 15,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },
  label: {
    color: colors.opaque,
    fontWeight: 'bold',
  },
});

export default orderStyle;
