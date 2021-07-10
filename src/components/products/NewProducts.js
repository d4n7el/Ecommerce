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

const NewProducts = () => {
  const [products, setProducts] = useState(null);
  const navigation = useNavigation();
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
          return (
            <Card key={element._id} style={[productStyle.containerProduct]}>
              <View style={productStyle.info}>
                <Text style={productStyle.subTitleInfo}>{element.title}</Text>
              </View>
              <ViewColors element={element} />

              <View
                style={[productStyle.containerThumbnail, layoutStyle.widthAll]}
              >
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.push("product", element.slug);
                  }}
                >
                  <ImageBackground
                    source={{
                      uri: `${BASE_URL_API}${element.image.url}`,
                    }}
                    resizeMode="contain"
                    style={backgroundImage.image}
                  ></ImageBackground>
                </TouchableWithoutFeedback>
              </View>

              <View style={productStyle.info}>
                <Text style={productStyle.subTitleInfo}>{element.title}</Text>
              </View>

              <View style={[productStyle.infoFooter]}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    console.log("like");
                  }}
                  style={layoutStyle.bgOrange}
                >
                  <Avatar.Icon
                    style={layoutStyle.iconLike}
                    size={35}
                    icon="cards-heart"
                    color={colors.opaque}
                  />
                </TouchableWithoutFeedback>
                <Text style={productStyle.infoPrice}>$ {element.price}</Text>

                <TouchableWithoutFeedback
                  onPress={() => {
                    console.log("add");
                  }}
                  style={layoutStyle.bgOrange}
                >
                  <Avatar.Icon
                    style={layoutStyle.iconLike}
                    size={35}
                    icon="cart-plus"
                    color={colors.primary}
                  />
                </TouchableWithoutFeedback>
              </View>
            </Card>
          );
        })}
    </View>
  );
};

export default NewProducts;
