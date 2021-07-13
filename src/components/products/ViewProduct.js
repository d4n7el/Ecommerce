import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";
import { layoutStyle, productStyle } from "../../styles";
import { BASE_URL_API } from "../../utils/const";
import { Avatar } from "react-native-paper";
import colors from "../../styles/colors";
import ViewColors from "./ViewColors";
import { useNavigation } from "@react-navigation/native";
import { backgroundImage } from "../../styles";

const ViewProduct = ({ element, isFav, updateFavorite }) => {
  const navigation = useNavigation();
  return (
    <Card key={element._id} style={[productStyle.containerProduct]}>
      <View style={productStyle.info}>
        <Text style={productStyle.subTitleInfo}>{element.title}</Text>
      </View>
      <ViewColors element={element} />

      <View style={[productStyle.containerThumbnail, layoutStyle.widthAll]}>
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
            if (updateFavorite) {
              updateFavorite(element._id, !isFav);
              console.log(isFav ? "disLike" : "like");
            }
          }}
          style={layoutStyle.bgOrange}
        >
          <Avatar.Icon
            style={layoutStyle.iconLike}
            size={35}
            icon="cards-heart"
            color={isFav ? colors.secondary : colors.opaque}
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
};

export default ViewProduct;
