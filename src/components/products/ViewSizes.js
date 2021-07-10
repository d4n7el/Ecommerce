import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { layoutStyle, productStyle } from "../../styles";
import { Avatar } from "react-native-paper";
import ViewColors from "./ViewColors";

const ViewSizes = ({ sizes = [] }) => {
  const [colors, setColors] = useState(null);
  const [sizeActive, setSizeActive] = useState(null);
  const [color, setColor] = useState(null);

  const update = (size) => {
    setColors(size.colors);
    setSizeActive(size.title);
    setColor(null);
  };

  return (
    <View style={layoutStyle.containerInLine}>
      <View
        style={[layoutStyle.centerInLineBetWeen, productStyle.containerSizes]}
      >
        <View>
          <Text style={productStyle.numberLikes}>Sizes</Text>
          <View style={[layoutStyle.centerInLine]}>
            {sizes.map((size) => {
              {
                colors === null && size.colors.length > 0 ? update(size) : null;
              }
              return (
                <TouchableWithoutFeedback
                  key={size._id}
                  onPress={() => {
                    update(size);
                  }}
                >
                  <Avatar.Text
                    style={[
                      size.title !== sizeActive
                        ? productStyle.iconSize
                        : productStyle.iconSizeActive,
                      layoutStyle.marginRight5,
                    ]}
                    labelStyle={productStyle.labelIconSize}
                    size={24}
                    label={size.title}
                  />
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={productStyle.labelSize}>Colors</Text>
          <ViewColors colors={colors} size={30} setColor={setColor} />
        </View>
        {true && (
          <View>
            <Text style={productStyle.numberLikes}>quantity</Text>

            {color && (
              <Text style={productStyle.labelQuantity}>{color.quantity}</Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
};
export default ViewSizes;
