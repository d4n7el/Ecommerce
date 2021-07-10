import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { layoutStyle } from "../../styles";
import { Avatar } from "react-native-paper";

const ViewColors = ({ element, colors, size = 14, setColor = () => {} }) => {
  return (
    <View style={[layoutStyle.centerInLine]}>
      {element &&
        element.sizes &&
        element.sizes !== undefined &&
        element.sizes.map((sizes) => {
          return (
            sizes.colors &&
            sizes.colors.map((color) => {
              if (color && color.title !== undefined) {
                return (
                  <Color
                    key={color._id}
                    color={color}
                    size={size}
                    setColor={setColor}
                  />
                );
              }
            })
          );
        })}
      {colors &&
        colors.map((color) => {
          if (color && color.title !== undefined) {
            return (
              <Color
                key={color._id}
                color={color}
                size={size}
                setColor={setColor}
              />
            );
          }
        })}
    </View>
  );
};

const Color = ({ color, size, setColor }) => (
  <TouchableWithoutFeedback
    onPress={() => {
      setColor(color);
    }}
  >
    <Avatar.Icon
      key={color._id}
      style={
        color.title === "white"
          ? layoutStyle.iconColorWhite
          : layoutStyle.iconColor
      }
      size={color.title === "white" ? size - 4 : size}
      icon="brightness-1"
      color={color.title}
    />
  </TouchableWithoutFeedback>
);

export default ViewColors;
