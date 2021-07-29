import React from 'react';
import { View, Text } from 'react-native';
import { Chip } from 'react-native-paper';
import colors from '../../styles/colors';
import { layoutStyle, orderStyle } from '../../styles';

const TapDetail = ({ tapSelected, setTapSelected, productsQty }) => {
  return (
    <View style={[layoutStyle.centerInLine, orderStyle.containerTap]}>
      <Text>
        <Chip
          selected={tapSelected === 'status'}
          selectedColor={colors.primary}
          icon="bell"
          onPress={() => {
            setTapSelected('status');
          }}
          style={
            tapSelected === 'status' ? orderStyle.tapSelected : orderStyle.tap
          }
          textStyle={
            tapSelected === 'status'
              ? orderStyle.tapTextSelected
              : orderStyle.tapText
          }
        >
          Estado
        </Chip>
      </Text>
      <Text>
        <Chip
          selected={tapSelected === 'products'}
          selectedColor={colors.primary}
          icon="basket-fill"
          onPress={() => {
            setTapSelected('products');
          }}
          style={
            tapSelected === 'products' ? orderStyle.tapSelected : orderStyle.tap
          }
          textStyle={
            tapSelected === 'products'
              ? orderStyle.tapTextSelected
              : orderStyle.tapText
          }
        >
          productos {`(${productsQty ? productsQty : 0})`}
        </Chip>
      </Text>
      <Text>
        <Chip
          selected={tapSelected === 'payment'}
          selectedColor={colors.primary}
          icon="account-cash"
          onPress={() => {
            setTapSelected('payment');
          }}
          style={
            tapSelected === 'payment' ? orderStyle.tapSelected : orderStyle.tap
          }
          textStyle={
            tapSelected === 'payment'
              ? orderStyle.tapTextSelected
              : orderStyle.tapText
          }
        >
          Pago
        </Chip>
      </Text>
    </View>
  );
};

export default TapDetail;
