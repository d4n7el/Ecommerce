import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { layoutStyle, backgroundImage } from "../../styles";
import { BASE_URL_API } from "../../utils/const";
import { listCartstyle } from "../../styles";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";

const ViewItemCart = ({ products, removeProduct, editQuantity }) => {
  return (
    products &&
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
            <Text style={[listCartstyle.iconRemove]}>
              <AwesomeIcon
                name={"trash"}
                size={20}
                color={colors.warning}
                onPress={() => {
                  if (removeProduct) {
                    removeProduct(product._id);
                  }
                }}
              />
            </Text>
            <Text style={listCartstyle.title}>{product.title}</Text>
            <Text style={listCartstyle.description}>{product.description}</Text>
            <View
              style={[layoutStyle.containerRow, listCartstyle.containerPrice]}
            >
              <Text style={listCartstyle.price}>{product.quantity} </Text>
              <Text style={listCartstyle.x}>X </Text>
              <Text style={listCartstyle.price}>{product.price}</Text>
            </View>
            {editQuantity && (
              <Text style={listCartstyle.plus}>
                <AwesomeIcon
                  name={"plus-square"}
                  size={20}
                  color={colors.secondary}
                  onPress={() => {
                    editQuantity(product._id, 1);
                  }}
                />
              </Text>
            )}

            {editQuantity && (
              <Text style={listCartstyle.minus}>
                <AwesomeIcon
                  name={"minus-square"}
                  size={20}
                  color={colors.warning}
                  onPress={() => {
                    editQuantity(product._id, -1);
                  }}
                />
              </Text>
            )}
          </View>
        </View>
      );
    })
  );
};

export default ViewItemCart;
