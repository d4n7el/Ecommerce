import React from 'react';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';
import { layoutStyle } from '../../styles';
import colors from '../../styles/colors';

const Loading = ({ text }) => {
  return (
    <SafeAreaView style={layoutStyle.containerPrimary}>
      <ActivityIndicator size={18} color={colors.third} />
      <Text style={layoutStyle.colorThird}>{text}</Text>
    </SafeAreaView>
  );
};

export default Loading;

Loading.defaultProps = {
  text: 'Cargando...',
};
