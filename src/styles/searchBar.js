import { StyleSheet } from 'react-native';
import colors from './colors';

const searchBarStyle = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    zIndex: 1,
  },
  statusBarCustom: {
    backgroundColor: colors.primary,
  },
  safeAreaView: {
    flex: 0,
    backgroundColor: colors.primary,
  },
});

export default searchBarStyle;
