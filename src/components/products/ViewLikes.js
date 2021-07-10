import React from "react";
import { View, Text } from "react-native";
import { layoutStyle, productStyle } from "../../styles";

const ViewLikes = () => {
  return (
    <View
      style={[layoutStyle.centerInLineBetWeen, productStyle.containerLikes]}
    >
      <View style={layoutStyle.center}>
        <Text style={productStyle.numberLikes}>765</Text>
        <Text style={productStyle.likesLabel}>Sold</Text>
      </View>
      <View style={layoutStyle.center}>
        <Text style={productStyle.numberLikes}>4378</Text>
        <Text style={productStyle.likesLabel}>Views</Text>
      </View>
      <View style={layoutStyle.center}>
        <Text style={productStyle.numberLikes}>456</Text>
        <Text style={productStyle.likesLabel}>Likes</Text>
      </View>
    </View>
  );
};

export default ViewLikes;
