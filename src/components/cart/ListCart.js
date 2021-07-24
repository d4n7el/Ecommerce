import React, { useCallback, useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";
import { getCartStorage } from "../../api/cart";
import { productsForIdApi } from "../../api/products";
import { validateResponse } from "../../utils/function";
import { layoutStyle } from "../../styles";
import ViewItemCart from "./ViewItemCart";
import { listCartstyle } from "../../styles";
import { deleteCartStorage, updateCartStorage } from "../../api/cart";
import SelectAddress from "../address/SelectAddress";
import SelectCard from "../paymentMethods/Select";
import { Button } from "react-native-paper";
import { createOrderApy } from "../../api/order";
import { UseLogin } from "../../context/login";

const ListCart = ({
  heightResume,
  setSubTotal,
  setDiscount,
  setTotal,
  total,
}) => {
  const [products, setProducts] = useState(null);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [limit, setLimit] = useState(1);
  const [limitCard, setLimitCard] = useState(1);

  const {
    auth: { token, id },
  } = UseLogin();

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

  const removeProduct = async (idProduct) => {
    const response = await deleteCartStorage(idProduct);
    setProducts(products.filter((p) => p._id !== idProduct));
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

  const editQuantity = async (idProduct, quantity = 1) => {
    await updateCartStorage(idProduct, quantity);
    const objIndex = products.findIndex((p) => p._id === idProduct);
    let copyProducts = [...products];
    let currentProduct = { ...copyProducts[objIndex] };
    currentProduct.quantity += quantity;
    if (currentProduct.quantity > 0) {
      copyProducts[objIndex] = currentProduct;
    } else {
      copyProducts = copyProducts.filter((p) => p._id !== idProduct);
    }
    setProducts(copyProducts);
  };

  const addOrderNew = async () => {
    const response = await createOrderApy(
      token,
      id,
      currentCard,
      products,
      currentAddress,
      total
    );
  };

  return (
    <View
      style={[
        layoutStyle.containerPrimary,
        listCartstyle.containerPrimary,
        { marginTop: heightResume },
      ]}
    >
      {products && (
        <>
          <ViewItemCart
            products={products}
            removeProduct={removeProduct}
            editQuantity={editQuantity}
          />

          <SelectAddress
            currentAddress={currentAddress}
            setCurrentAddress={setCurrentAddress}
            limit={limit}
            setLimit={setLimit}
          />

          <SelectCard
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            limit={limitCard}
            setLimit={setLimitCard}
          />
          <Button
            icon="send"
            mode="contained"
            style={[layoutStyle.buttonSuccess, layoutStyle.button]}
            onPress={() => {
              addOrderNew();
            }}
          >
            pagar
          </Button>
        </>
      )}
    </View>
  );
};

export default ListCart;
