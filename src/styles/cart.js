import colors from './colors';
import { StyleSheet } from 'react-native';

export const listCartstyle = StyleSheet.create({
  containerPrimary: {
    marginBottom: 90,
    marginTop: 40,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,

    marginBottom: 20,
  },
  conatinerImg: {
    backgroundColor: 'transparent',
    width: '25%',
    zIndex: 1,
    elevation: 1,
  },
  conatinerData: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : 'white',
    opacity: Platform.OS === 'ios' ? 0.8 : 1,
    width: '80%',
    borderRadius: 20,
    marginLeft: -30,
    zIndex: 0,
    elevation: 0,
    paddingLeft: 50,
    paddingTop: 5,
    borderColor: colors.light,
    borderWidth: 1,
    paddingBottom: 15,
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 23 : 20,
    color: colors.primary,
    opacity: 1,
    marginTop: Platform.OS === 'ios' ? 10 : 5,
    fontWeight: 'bold',
  },
  description: {
    fontSize: Platform.OS === 'ios' ? 14 : 12,
    color: colors.primary,
    opacity: 1,
  },
  price: {
    color: colors.fourth,
    fontWeight: 'bold',
  },
  containerPrice: {
    marginTop: 10,
  },
  x: {
    color: colors.dark,
    fontWeight: 'bold',
    marginTop: 5,
  },
  totals: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
  },
  priceValue: {
    color: colors.primary,
  },
  priceTotal: {
    color: colors.primary,
    fontWeight: '900',
    fontWeight: 'bold',
  },
  iconRemove: {
    position: 'absolute',
    right: 20,
    top: 15,
    zIndex: 1,
  },
  plus: {
    position: 'absolute',
    right: 20,
    bottom: 15,
  },
  minus: {
    position: 'absolute',
    right: 60,
    bottom: 15,
  },
  contentResumeCart: {
    width: '100%',
    height: 100,
  },
  containerResume: {
    backgroundColor: colors.applicationBackground,
    zIndex: 2,
    position: 'absolute',
    flex: 1,
    width: '100%',
    shadowColor: colors.dark,
    shadowOffset: {
      width: -5,
      height: 10,
    },
    elevation: 19,
    shadowOpacity: 0.2,
    shadowRadius: 4.68,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },
  linkNewMethod: {
    position: 'absolute',
    right: 20,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 19,
    shadowOpacity: 0.2,
  },
  stateCard: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
