import React, { useState } from "react";
import { View, Text } from "react-native";
import { CardView } from "react-native-input-credit-card";
import { layoutStyle, listCartstyle } from "../../styles";
import { Switch } from "react-native-paper";
import colors from "../../styles/colors";

const CardViewCustom = ({ card }) => {
  console.log(card);
  const [isSwitchOn, setIsSwitchOn] = useState(
    card.active === 1 ? true : false
  );
  return (
    <View>
      <CardView
        style={[{ width: "100%" }]}
        key={card._id}
        name={card.name}
        number={card.last4}
        scale={1}
        expiry={`${
          card.exp_month < 10 ? "0" + card.exp_month : card.exp_month
        }/${card.exp_year.toString().substring(2)}`}
        inputStyle={layoutStyle.displayNone}
        labelStyle={layoutStyle.displayNone}
        inputContainerStyle={layoutStyle.displayNone}
      />
      <View style={[layoutStyle.alignItemsEnd, listCartstyle.stateCard]}>
        <Switch
          value={isSwitchOn}
          color={colors.secondary}
          onValueChange={() => {
            setIsSwitchOn(!isSwitchOn);
          }}
        />
      </View>

      <Text style={[listCartstyle.description, layoutStyle.padding5]}>
        Mis transacciones {card.last4}
      </Text>
    </View>
  );
};

export default CardViewCustom;
