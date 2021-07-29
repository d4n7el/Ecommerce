import React, { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getOrdersApi } from '../../api/order';
import { UseLogin } from '../../context/login';
import { validateResponse } from '../../utils/function';
import ListOrders from './ListOrders';
import TitleHeader from '../templates/TitleHeader';
import { sortDataForDate } from '../../utils/function';
import { ActivityIndicator } from 'react-native';
import colors from '../../styles/colors';
import { View } from 'react-native';
import { layoutStyle } from '../../styles';

const Orders = () => {
  const [orders, setOrders] = useState(null);

  const {
    auth: { token, id },
  } = UseLogin();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        setOrders(null);
        getOrders();
      })();
    }, [])
  );

  const productsQty = (products) => {
    const totalProducts = products.reduce(function (a, b) {
      return a + b.quantity;
    }, 0);

    return totalProducts;
  };

  const getOrders = async () => {
    const response = await getOrdersApi(token);
    const { process } = await validateResponse(response);
    if (process) {
      setOrders(sortDataForDate(response.data, 'published_at'));
    }
  };

  const getLastStatusOrder = (order) => {
    return sortDataForDate(order, 'date')[0];
  };

  return orders ? (
    <TitleHeader
      title={'Lista de pedidos'}
      children={
        <ListOrders
          orders={orders}
          productsQty={productsQty}
          status={getLastStatusOrder}
        />
      }
    />
  ) : (
    <View style={layoutStyle.containerPrimary}>
      <ActivityIndicator size={18} color={colors.third} />
    </View>
  );
};

export default Orders;
