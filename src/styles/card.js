import colors from './colors';
import { StyleSheet } from 'react-native';

export const cardStyle = StyleSheet.create({
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
  imageSelectList: {
    width: 20,
  },
  itemCardSelect: {
    borderWidth: 1,
    borderColor: colors.light,
    marginTop: 8,
    borderRadius: 4,
  },
  itemCardSelectSelected: {
    backgroundColor: colors.secondary,
    marginTop: 8,
    borderRadius: 4,
  },
  containerImg: {
    width: '15%',
  },
  infoSelectCard: {
    width: '85%',
  },
  textInfo: {
    color: colors.primary,
  },
  textLast4: {
    marginLeft: 5,
  },
  textInfoSelected: {
    color: colors.white,
  },
  imageCardSimple: {
    width: 40,
    height: 40,
  },
  viewcardSimple: {
    backgroundColor: colors.white,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
});
