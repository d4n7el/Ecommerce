import { StyleSheet } from 'react-native';
import colors from './colors';

const layoutStyle = StyleSheet.create({
  containerPrimary: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  containerCenter: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  bgOrange: {
    backgroundColor: 'orange',
  },
  widthAll: {
    width: '100%',
    resizeMode: 'contain',
  },
  button: {
    margin: 6,
  },
  buttonContained: {
    backgroundColor: colors.third,
  },
  buttonSuccess: {
    backgroundColor: colors.third,
    color: colors.opaque,
  },
  buttonWarning: {
    backgroundColor: colors.fourth,
  },
  buttonOutlined: {
    backgroundColor: 'transparent',
    borderColor: colors.primary,
  },
  colorThird: { color: colors.third },
  padding40: {
    padding: 40,
  },
  title: {
    color: colors.fourth,
    fontSize: 16,
  },
});

export default layoutStyle;
