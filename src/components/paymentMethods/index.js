import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Avatar } from "react-native-paper";
import { layoutStyle, listCartstyle } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { getPaymentMethodsApy } from "../../api/paymentMethods";
import { UseLogin } from "../../context/login";
import { validateResponse } from "../../utils/function";

import colors from "../../styles/colors";
import CarouselCard from "../../components/corousel/card";
import StatusBarCustom from "../../components/statusBar/Index";
import { mapCardsView } from "../../utils/mapDataCard";

const PaymentMethodsView = () => {
  const [dataCards, setDataCards] = useState([]);

  const {
    auth: { token, id },
  } = UseLogin();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        setDataCards([]);
        getCards();
      })();
    }, [])
  );

  const getCards = async () => {
    const response = await getPaymentMethodsApy(token, id, false);

    const { process, rows } = await validateResponse(response);
    if (process && rows > 0) {
      setDataCards(mapCardsView(response.data));
    }
  };

  const navigation = useNavigation();
  return (
    <>
      <StatusBarCustom />

      <ScrollView>
        <View style={layoutStyle.container}>
          <Text style={listCartstyle.title}>Mis metodos de pago</Text>
        </View>
        <View
          style={[
            layoutStyle.alignItemsEnd,
            layoutStyle.padding5,
            listCartstyle.linkNewMethod,
          ]}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("new_payment_methods");
            }}
          >
            <Avatar.Icon
              size={40}
              icon="plus"
              color={colors.white}
              style={layoutStyle.bgSecondary}
            />
          </TouchableWithoutFeedback>
        </View>

        {dataCards && <CarouselCard cards={dataCards} />}
      </ScrollView>
    </>
  );
};

export default PaymentMethodsView;
