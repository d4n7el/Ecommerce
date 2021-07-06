import { StyleSheet } from 'react-native';
import colors from './colors';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressTex: {
    fontSize: 15,
  },
});

export default addressStyle;
