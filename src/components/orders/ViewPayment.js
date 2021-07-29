import React from 'react';
import { View, Text } from 'react-native';
import { layoutStyle, paymentStyle } from '../../styles';
import ViewSimpleCard from '../paymentMethods/ViewSimpleCard';

const ViewPayment = ({ payment, products }) => {
  const sumCart = () => {
    const subTotal = products.reduce(function (a, b) {
      return a + b.price * b.quantity;
    }, 0);
    return subTotal;
  };

  const sumDiscount = () => {
    const discount = products.reduce(function (a, b) {
      return a + (b.price * b.quantity * b.discount) / 100;
    }, 0);
    return discount;
  };

  return (
    <View>
      <ViewSimpleCard
        name={payment.name}
        brand={payment.brand}
        last4={payment.last4}
      />
      <View style={[layoutStyle.padding20]}>
        {products &&
          products.map((product) => {
            return (
              <View key={product._id} style={layoutStyle.containerInLine}>
                <View style={[layoutStyle.containerInLine]}>
                  <Text style={paymentStyle.listLabel}>
                    {product.product.title}{' '}
                  </Text>
                </View>
                <View style={layoutStyle.centerInLineBetWeenBase}>
                  <Text style={paymentStyle.listValue}>
                    {product.product.price}
                  </Text>
                </View>
              </View>
            );
          })}
      </View>

      <View
        style={[
          layoutStyle.containerInLine,
          layoutStyle.padding20,
          paymentStyle.containerSubtotal,
        ]}
      >
        <View style={[layoutStyle.containerInLine]}>
          <Text style={layoutStyle.textWhiteBold}>Subtotal: </Text>
        </View>
        <View style={layoutStyle.centerInLineBetWeenBase}>
          <Text style={layoutStyle.textWhiteBold}>{sumCart()}</Text>
        </View>
      </View>

      <View style={[layoutStyle.padding20]}>
        {products &&
          products.map((product) => {
            return (
              <View key={product._id} style={layoutStyle.containerInLine}>
                <View style={[layoutStyle.containerInLine]}>
                  <Text
                    style={paymentStyle.listLabel}
                  >{`${product.product.title} -`}</Text>
                  <Text
                    style={paymentStyle.listLabel}
                  >{`(${product.product.discount}%)`}</Text>
                </View>
                <View style={layoutStyle.centerInLineBetWeenBase}>
                  <Text style={paymentStyle.listValue}>
                    {(product.product.price * product.product.discount) / 100}
                  </Text>
                </View>
              </View>
            );
          })}
      </View>

      <View
        style={[
          layoutStyle.containerInLine,
          layoutStyle.padding20,
          paymentStyle.containerDiscount,
        ]}
      >
        <View style={[layoutStyle.containerInLine]}>
          <Text style={paymentStyle.listValue}>Descuentos: </Text>
        </View>
        <View style={layoutStyle.centerInLineBetWeenBase}>
          <Text style={paymentStyle.listValue}>{sumDiscount()}</Text>
        </View>
      </View>

      <View style={[layoutStyle.padding20]}>
        <View style={[layoutStyle.containerInLine]}>
          <View style={[layoutStyle.containerInLine]}>
            <Text style={paymentStyle.listLabel}>Pago debitado: </Text>
          </View>
          <View style={layoutStyle.centerInLineBetWeenBase}>
            <Text style={paymentStyle.listValue}>{payment.amount}</Text>
          </View>
        </View>
        <View style={[layoutStyle.containerInLine]}>
          <View style={[layoutStyle.containerInLine]}>
            <Text style={paymentStyle.listLabel}>Pago calculado: </Text>
          </View>
          <View style={layoutStyle.centerInLineBetWeenBase}>
            <Text style={paymentStyle.listValue}>
              {sumCart() - sumDiscount()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewPayment;
