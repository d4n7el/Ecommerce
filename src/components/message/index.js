import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";
import { layoutStyle, messageStyle } from "../../styles";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Message = ({
  message,
  color,
  icon = "home",
  colorIcon,
  bgIcon,
  heightAll,
  messageAction,
  nameToNavigate,
  styleButtonAction,
  colorButtonAction,
  iconButtonAction = "home",
}) => {
  const { height } = Dimensions.get("screen");
  const navigation = useNavigation();
  return (
    <View
      style={[
        layoutStyle.center,
        layoutStyle.containerCenter,
        {
          height: heightAll ? height - 120 : "auto",
          width: "100%",
          overflow: "hidden",
        },
      ]}
    >
      <View>
        <View style={[layoutStyle.containerCenter]}>
          <View
            style={[
              layoutStyle.center,
              messageStyle.icon,

              { backgroundColor: bgIcon || colors.warning },
            ]}
          >
            <AwesomeIcon
              name={icon}
              size={50}
              color={colorIcon || colors.white}
            />
          </View>

          <Text
            style={[{ color: color || colors.primary }, messageStyle.message]}
          >
            {message}
          </Text>
          {messageAction && (
            <Button
              icon={iconButtonAction}
              style={styleButtonAction ? styleButtonAction : null}
              mode="contained"
              onPress={() => navigation.navigate(nameToNavigate)}
              labelStyle={{ color: colorButtonAction || colors.primary }}
            >
              {messageAction}
            </Button>
          )}
        </View>
      </View>
    </View>
  );
};

export default Message;
