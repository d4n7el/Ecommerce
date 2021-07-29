import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getOrderApi } from '../../api/order';
import { UseLogin } from '../../context/login';
import { validateResponse } from '../../utils/function';
import { sortDataForDate } from '../../utils/function';
import TapDetail from './TapDetail';
import ListStatus from './ListStatus';
import ProductsInOrder from './ProductsInOrder';
import ViewPayment from './ViewPayment';

const DetailOrderView = ({ id }) => {
  const [status, setStatus] = useState(null);
  const [products, setProducts] = useState(null);
  const [payment, setpayment] = useState(null);
  const [tapSelected, setTapSelected] = useState('status');
  const {
    auth: { id: idUser, token },
  } = UseLogin();

  useEffect(() => {
    getOrder();
  }, [id]);

  const getOrder = async () => {
    const response = await getOrderApi(token, id);
    const { process } = await validateResponse(response);
    if (process) {
      setProducts(response.data.detail_order.products);
      setStatus(sortDataForDate(response.data.detail_order.status, 'date'));
      setpayment(response.data.detail_order.payment);
    }
  };

  return (
    <View>
      {products && (
        <>
          <TapDetail
            setTapSelected={setTapSelected}
            tapSelected={tapSelected}
            productsQty={products.length}
          />
          {tapSelected === 'status' && <ListStatus status={status} />}
          {tapSelected === 'products' && (
            <ProductsInOrder products={products} />
          )}
          {tapSelected === 'payment' && (
            <ViewPayment payment={payment} products={products} />
          )}
        </>
      )}
    </View>
  );
};

export default DetailOrderView;
