import React from 'react';
import { View, Text } from 'react-native';
import { layoutStyle, orderStyle } from '../../styles';
import colors from '../../styles/colors';
import { FAB } from 'react-native-paper';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagesOrder from './ImagesOrder';
import { useNavigation } from '@react-navigation/native';

const ListOrders = ({ orders, productsQty, status }) => {
  const navigation = useNavigation();
  return (
    orders &&
    orders.map((order) => {
      return (
        <View style={[orderStyle.containerOrder]} key={order._id}>
          <FAB
            style={layoutStyle.fabTopRight}
            small
            color={colors.white}
            size={14}
            icon="arrow-right"
            onPress={() => {
              navigation.navigate({
                name: 'detail_orders',
                params: { id: order._id },
              });
            }}
          />
          <View style={layoutStyle.containerInLine}>
            <Text style={orderStyle.label}>Fecha: </Text>
            <Text style={orderStyle.info}>{order.published_at}</Text>
          </View>
          <View style={layoutStyle.containerInLine}>
            <Text style={orderStyle.label}>Estado: </Text>
            <Text style={orderStyle.info}>
              {status(order.detail_order.status, 'date').order_state.state}
            </Text>
          </View>
          <View style={layoutStyle.containerInLine}>
            <Text style={orderStyle.label}>Cantidad de productos: </Text>
            <Text style={orderStyle.info}>
              {productsQty(order.detail_order.products)}
            </Text>
          </View>
          <View style={layoutStyle.containerInLine}>
            <Text style={orderStyle.label}>Valor pagado: </Text>
            <Text style={orderStyle.info}>
              {order.detail_order.payment.amount}
            </Text>
          </View>
          <ImagesOrder products={order.detail_order.products} />
        </View>
      );
    })
  );
};

export default ListOrders;
