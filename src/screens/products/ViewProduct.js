import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { productApi } from "../../api/products";
import { layoutStyle, productStyle } from "../../styles";
import { BASE_URL_API } from "../../utils/const";
import { backgroundImage } from "../../styles";
import ViewLikes from "../../components/products/ViewLikes";
import ViewSizes from "../../components/products/ViewSizes";
import { Divider } from "react-native-paper";
import Carousel from "../../components/corousel";

const ViewProduct = ({ route: { params } }) => {
  const [product, setProduct] = useState(null);
  const [slug, setSlug] = useState(params || null);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        getPrduct();
      })();
    }, [])
  );

  const getPrduct = async () => {
    const response = await productApi(slug);
    if (
      response &&
      response.status &&
      response.status <= 200 &&
      response.status <= 204
    ) {
      setProduct(response.data ? response.data : []);
    }
  };

  return (
    <ScrollView>
      {product && (
        <>
          <SafeAreaView />
          <View>
            <Text style={productStyle.titlePrimary}>{product.title}</Text>
          </View>
          {product.images.length > 0 ? (
            <Carousel dinamicImages={product.images} />
          ) : (
            <View style={layoutStyle.center}>
              <View style={[productStyle.containerImg]}>
                <ImageBackground
                  source={{ uri: `${BASE_URL_API}${product.image.url}` }}
                  resizeMode="contain"
                  style={backgroundImage.image}
                ></ImageBackground>
              </View>
            </View>
          )}

          <ViewLikes />
          <Divider />
          {product.sizes && <ViewSizes sizes={product.sizes} />}
        </>
      )}
    </ScrollView>
  );
};

export default ViewProduct;
