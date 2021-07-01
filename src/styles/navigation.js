import { StyleSheet } from 'react-native';
import colors from './colors';

const navigationStyle = StyleSheet.create({
  nav: {
    backgroundColor: colors.primary,
    paddingBottom: 5,
  },
  icon: {
    fontSize: 20,
    color: colors.light,
  },
});

export default navigationStyle;
