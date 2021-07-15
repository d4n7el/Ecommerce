import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { layoutStyle } from "../../styles";
import colors from "../../styles/colors";
import { Avatar } from "react-native-paper";
import { updateCartStorage } from "../../api/cart";

const ShoppingCart = ({ idProduct }) => {
  const addCart = (idProduct) => {
    const response = updateCartStorage(idProduct);
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
