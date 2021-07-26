import React, { useCallback, useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text } from "react-native";
import { getCartStorageProducts } from "../../api/cart";
import { productsForIdApi } from "../../api/products";
import { validateResponse } from "../../utils/function";
import { layoutStyle } from "../../styles";
import ViewItemCart from "./ViewItemCart";
import { listCartstyle } from "../../styles";
import {
  deleteCartStorageProduct,
  updateCartStorageProducts,
} from "../../api/cart";
import SelectAddress from "../address/SelectAddress";
import SelectCard from "../paymentMethods/Select";
import { Button } from "react-native-paper";
import { createOrderApy } from "../../api/order";
import { UseLogin } from "../../context/login";
import { productsInApi } from "../../api/products";
import { mapProductsNewOrder } from "../../utils/mapProducts";
import { mapAddressNewOrder } from "../../utils/mapAddress";

const ListCart = ({
  heightResume,
  setSubTotal,
  setDiscount,
  setTotal,
  total,
}) => {
  const [products, setProducts] = useState([]);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [limit, setLimit] = useState(1);
  const [limitCard, setLimitCard] = useState(1);
  const [loading, setLoading] = useState(false);

  const {
    auth: { token, id },
  } = UseLogin();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        setProducts([]);
        getCart();
      })();
    }, [])
  );

  useEffect(() => {
    if (products) {
      sumCart();
      sumDiscount();
    }
    if (products.length === 0) {
      setTotal(0);
    }
  }, [products]);

  const getCart = async () => {
    const cart = await getCartStorageProducts(id);
    let ids = [];
    cart.products.forEach((a) => {
      ids = [...ids, a.idProduct];
    });

    const response = await productsInApi(ids);

    const { process, rows } = await validateResponse(response);
    if (process && rows > 0) {
      response.data.forEach((product) => {
        product.quantity = cart.products.find(
          (p) => p.idProduct === product._id
        ).quantity;
      });
    }
    setProducts(response.data);
  };

  const removeProduct = async (idProduct) => {
    await deleteCartStorageProduct(id, idProduct);
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
    await updateCartStorageProducts(id, idProduct, quantity);
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
    setLoading(true);
    const response = await createOrderApy(
      token,
      id,
      currentCard,
      mapProductsNewOrder(products),
      mapAddressNewOrder(currentAddress),
      total
    );
    setLoading(false);
  };
  return products && products.length > 0 ? (
    <View
      style={[
        layoutStyle.containerPrimary,
        listCartstyle.containerPrimary,
        { marginTop: heightResume },
      ]}
    >
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
        {currentAddress && currentCard && (
          <Button
            loading={loading}
            icon="send"
            mode="contained"
            style={[layoutStyle.buttonSuccess, layoutStyle.button]}
            onPress={() => {
              !loading ? addOrderNew() : null;
            }}
          >
            pagar
          </Button>
        )}
      </>
    </View>
  ) : null;
};

export default ListCart;
