import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import StatusBarCustom from '../../components/statusBar/Index';
import { layoutStyle } from '../../styles';
import colors from '../../styles/colors';

const TitleHeader = ({ children, title }) => {
  return (
    <View style={{ paddingBottom: 50 }}>
      <StatusBarCustom
        bgcolorSafeAreaView={colors.primary}
        colorSafeAreaView="light-content"
      />
      <View style={[layoutStyle.containerTitle]}>
        <Text style={layoutStyle.title}>{title}</Text>
      </View>

      <View style={[layoutStyle.secondContainer, { paddingBottom: 950 }]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ paddingBottom: 552 }}
        >
          {children}
        </ScrollView>
      </View>
    </View>
  );
};

export default TitleHeader;

TitleHeader.defaultProps = {
  title: 'Ingresa un titulo',
  children: <Text>Ingresa un contenido para la vista</Text>,
};
