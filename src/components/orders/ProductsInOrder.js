import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { layoutStyle, orderStyle } from '../../styles';
import colors from '../../styles/colors';
import { BASE_URL_API } from '../../utils/const';

const ProductsInOrder = ({ products }) => {
  return (
    <View style={[layoutStyle.container]}>
      {products &&
        products.map((product) => {
          return (
            <View
              key={product._id}
              style={[
                layoutStyle.containerRow,
                layoutStyle.alignItemsCenter,
                orderStyle.containerProdOrder,
                layoutStyle.shadowDefault,
              ]}
            >
              <View>
                <Image
                  source={{
                    uri: `${BASE_URL_API}${product.product.image.url}`,
                  }}
                  style={{ width: 50, height: 50, resizeMode: 'contain' }}
                  PlaceholderContent={<ActivityIndicator />}
                />
              </View>
              <View>
                <Text style={orderStyle.descriptionText}>
                  {product.product.description}
                </Text>
                <Text style={orderStyle.price}>
                  Precio:
                  <Text style={[layoutStyle.bold, orderStyle.values]}>
                    {product.product.price}
                  </Text>
                </Text>
                <Text style={orderStyle.discount}>
                  Descuento:
                  <Text style={[layoutStyle.bold, orderStyle.values]}>
                    {product.product.discount}
                  </Text>
                </Text>
                <Text style={orderStyle.quantity}>
                  Cantidad:{' '}
                  <Text style={[layoutStyle.bold, orderStyle.values]}>
                    {product.quantity}
                  </Text>
                </Text>
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default ProductsInOrder;
