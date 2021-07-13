import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { productLastsApi } from "../../api/products";
import { Card, Button } from "react-native-paper";
import { layoutStyle, productStyle } from "../../styles";
import { BASE_URL_API } from "../../utils/const";
import { Avatar } from "react-native-paper";
import colors from "../../styles/colors";
import ViewColors from "./ViewColors";
import { useNavigation } from "@react-navigation/native";
import { backgroundImage } from "../../styles";
import ViewProduct from "./ViewProduct";

const NewProducts = () => {
  const [products, setProducts] = useState(null);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        getProductsLast();
      })();
    }, [])
  );

  const getProductsLast = async () => {
    const response = await productLastsApi(10);
    if (
      response &&
      response.status &&
      response.status <= 200 &&
      response.status <= 204
    ) {
      setProducts(response.data ? response.data : []);
    }
  };

  return (
    <View style={[productStyle.container]}>
      {products &&
        products.map((element) => {
          return <ViewProduct key={element._id} element={element} />;
        })}
    </View>
  );
};

export default NewProducts;
