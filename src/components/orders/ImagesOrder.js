import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { layoutStyle, orderStyle } from '../../styles';
import { BASE_URL_API } from '../../utils/const';

const ImagesOrder = ({ products }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImagesInOrder();
  }, [products]);

  const getImagesInOrder = () => {
    const listImages = [];
    products.slice(0, 6).forEach((product) => {
      listImages.push(`${BASE_URL_API}${product.product.image.url}`);
    });
    setImages(listImages);
  };

  return (
    <View style={layoutStyle.containerInLine}>
      {images &&
        images.map((url) => {
          return (
            <Image
              key={url}
              style={orderStyle.avatarProduct}
              size={30}
              resizeMode="contain"
              source={{ uri: url }}
            />
          );
        })}
    </View>
  );
};

export default ImagesOrder;
