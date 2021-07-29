import { StyleSheet } from 'react-native';
import colors from './colors';

const paymentStyle = StyleSheet.create({
  listLabel: {
    color: colors.primary,
  },
  listValue: {
    color: colors.primary,
    fontWeight: '800',
  },
  containerSubtotal: {
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  containerDiscount: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  textWhite: {
    color: colors.white,
  },
});

export default paymentStyle;
