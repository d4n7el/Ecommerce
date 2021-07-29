import React from 'react';
import { View, Text } from 'react-native';
import TitleHeader from '../../components/templates/TitleHeader';
import DetailOrderView from '../../components/orders/DetailOrder';

const DetailOrder = (props) => {
  const {
    route: { params },
  } = props;

  return (
    <View>
      <TitleHeader
        children={<DetailOrderView id={params.id} />}
        title={'Detalle de pedido'}
      />
    </View>
  );
};

export default DetailOrder;
