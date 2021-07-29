import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar, SafeAreaView } from 'react-native';
import { searchBarStyle } from '../../styles';
import colors from '../../styles/colors';

const StatusBarCustom = ({ bgcolorSafeAreaView, colorSafeAreaView }) => {
  return (
    <>
      <SafeAreaView
        style={
          (searchBarStyle.safeAreaView,
          {
            backgroundColor: bgcolorSafeAreaView
              ? bgcolorSafeAreaView
              : colors.applicationBackground,
          })
        }
      />
      <StatusBar
        style={searchBarStyle.statusBarCustom}
        barStyle={colorSafeAreaView ? colorSafeAreaView : 'default'}
      />
    </>
  );
};

export default StatusBarCustom;
