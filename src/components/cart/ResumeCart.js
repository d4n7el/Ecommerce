import React, { useState } from "react";
import { View, Text } from "react-native";
import { layoutStyle } from "../../styles";
import { listCartstyle } from "../../styles";

const ResumeCart = ({ subTotal, discount, setHeightResume, total }) => {
  return (
    <View
      style={[layoutStyle.containerPrimary, listCartstyle.containerResume]}
      onLayout={(e) => {
        setHeightResume(e.nativeEvent.layout.height + 10);
      }}
    >
      <View style={[listCartstyle.contentResumeCart]}>
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
          <Text style={listCartstyle.priceTotal}> {total} </Text>
        </View>
      </View>
    </View>
  );
};

export default ResumeCart;
