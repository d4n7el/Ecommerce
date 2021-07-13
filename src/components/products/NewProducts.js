import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ListProducts from "./ListProducts";
import { productLastsApi } from "../../api/products";

const newProducts = () => {
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

  return <>{products && <ListProducts products={products} />}</>;
};

export default newProducts;
