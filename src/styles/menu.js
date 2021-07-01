import { StyleSheet } from 'react-native';
import colors from './colors';

const menuStyle = StyleSheet.create({
  conatiner: {
    height: 100,
    padding: 20,
  },
  titleName: {
    color: colors.third,
    fontSize: 19,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 15,
    color: colors.opaque,
  },
});

export default menuStyle;
