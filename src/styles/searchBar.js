import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

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
  },
  search: {
    borderRadius: 20,
    height: 47,
    shadowColor: 'transparent',
  },
  backArrow: {
    position: 'absolute',
    color: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    left: -20,
  },
  alignLeft: {
    position: 'relative',
    alignItems: 'flex-end',
  },
  showHistory: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: colors.applicationBackground,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
  },
  historyItemText: {
    fontSize: 18,
    color: colors.primary,
    marginTop: 10,
  },
  historyItemIcon: {
    fontSize: 20,
  },
});

export default searchBarStyle;
