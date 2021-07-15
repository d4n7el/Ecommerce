import React, { useCallback, useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";
import { getCartStorage } from "../../api/cart";
import { productsForIdApi } from "../../api/products";
import { validateResponse } from "../../utils/function";
import { layoutStyle, backgroundImage } from "../../styles";
import { BASE_URL_API } from "../../utils/const";
import colors from "../../styles/colors";
import { Divider } from "react-native-paper";

const ListCart = () => {
  const [products, setProducts] = useState(null);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        setProducts(null);
        getCart();
      })();
    }, [])
  );

  useEffect(() => {
    if (products) {
      sumCart();
      sumDiscount();
    }
  }, [products]);

  const getCart = async () => {
    const cart = await getCartStorage();
    const listProducts = [];

    for await (const product of cart) {
      const response = await productsForIdApi(product.idProduct);
      const { process, rows } = await validateResponse(response);
      if (process && rows === 1) {
        response.data[0].quantity = product.quantity;
        listProducts.push(response.data[0]);
      }
    }
    setProducts(listProducts);
  };

  const sumCart = () => {
    const subTotal = products.reduce(function (a, b) {
      return a + b.price * b.quantity;
    }, 0);
    setSubTotal(subTotal);
  };

  const sumDiscount = () => {
    const discount = products.reduce(function (a, b) {
      return a + (b.price * b.quantity * b.discount) / 100;
    }, 0);
    setDiscount(discount);
  };

  return (
    <View
      style={[layoutStyle.containerPrimary, listCartstyle.containerPrimary]}
    >
      {products &&
        products.map((product) => {
          return (
            <View key={product._id} style={listCartstyle.wrapper}>
              <View style={listCartstyle.conatinerImg}>
                <ImageBackground
                  source={{
                    uri: `${BASE_URL_API}${product.image.url}`,
                  }}
                  resizeMode="contain"
                  style={backgroundImage.image}
                ></ImageBackground>
              </View>
              <View style={listCartstyle.conatinerData}>
                <Text style={listCartstyle.title}>{product.title}</Text>
                <Text style={listCartstyle.description}>
                  {product.description}
                </Text>
                <View
                  style={[
                    layoutStyle.containerRow,
                    listCartstyle.containerPrice,
                  ]}
                >
                  <Text style={listCartstyle.price}>{product.quantity} </Text>
                  <Text style={listCartstyle.x}>X </Text>
                  <Text style={listCartstyle.price}>{product.price}</Text>
                </View>
              </View>
            </View>
          );
        })}
      {products && (
        <>
          <Divider />
          <View
            style={[layoutStyle.centerInLineBetWeenBase, listCartstyle.totals]}
          >
            <Text style={listCartstyle.price}>SubTotal</Text>
            <Text style={listCartstyle.priceValue}> {subTotal} </Text>
          </View>
          <View
            style={[layoutStyle.centerInLineBetWeenBase, listCartstyle.totals]}
          >
            <Text style={listCartstyle.price}>Descuento </Text>
            <Text style={listCartstyle.priceValue}> {discount} </Text>
          </View>
          <View
            style={[layoutStyle.centerInLineBetWeenBase, listCartstyle.totals]}
          >
            <Text style={listCartstyle.price}>Total </Text>
            <Text style={listCartstyle.priceTotal}>
              {" "}
              {subTotal - discount}{" "}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ListCart;

const listCartstyle = StyleSheet.create({
  containerPrimary: {
    marginBottom: 90,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    height: Platform.OS === "ios" ? 150 : 120,
    marginBottom: 20,
  },
  conatinerImg: {
    backgroundColor: "transparent",
    width: "25%",
    zIndex: 1,
    elevation: 1,
  },
  conatinerData: {
    backgroundColor: Platform.OS === "ios" ? "white" : "white",
    opacity: Platform.OS === "ios" ? 0.8 : 1,
    width: "80%",
    borderRadius: 30,
    marginLeft: -30,
    zIndex: 0,
    elevation: 0,
    paddingLeft: 50,
    paddingTop: 10,
    shadowColor: colors.dark,
    shadowOffset: {
      width: -15,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    borderColor: colors.light,
    borderWidth: Platform.OS === "ios" ? 1 : 0,
  },
  title: {
    fontSize: 23,
    color: colors.primary,
    opacity: 1,
    marginTop: Platform.OS === "ios" ? 20 : 5,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    color: colors.primary,
    opacity: 1,
  },
  price: {
    color: colors.fourth,
    fontWeight: "bold",
  },
  containerPrice: {
    marginTop: 10,
  },
  x: {
    fontSize: 18,
    color: colors.dark,
    fontWeight: "bold",
    marginTop: 5,
  },
  totals: {
    width: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
  },
  priceValue: {
    color: colors.primary,
  },
  priceTotal: {
    color: colors.primary,
    fontWeight: "900",
    fontWeight: "bold",
  },
});
