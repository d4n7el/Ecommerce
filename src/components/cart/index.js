import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { layoutStyle } from "../../styles";
import colors from "../../styles/colors";
import { Avatar } from "react-native-paper";
import { updateCartStorageProducts } from "../../api/cart";
import { UseLogin } from "../../context/login";

const ShoppingCart = ({ idProduct }) => {
  const {
    auth: { token, id },
  } = UseLogin();

  const addCart = (idProduct) => {
    const response = updateCartStorageProducts(id, idProduct);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        addCart(idProduct);
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
  );
};

export default ShoppingCart;
