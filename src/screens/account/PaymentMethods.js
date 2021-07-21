import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { Avatar } from "react-native-paper";
import { layoutStyle } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { getPaymentMethodsApy } from "../../api/paymentMethods";
import { UseLogin } from "../../context/login";
import { validateResponse } from "../../utils/function";

const PaymentMethods = () => {
  const [dataCards, setDataCards] = useState(null);
  const {
    auth: { token, id },
  } = UseLogin();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        getCards();
      })();
    }, [])
  );

  const getCards = async () => {
    const response = await getPaymentMethodsApy(token, id);

    const { process, rows } = await validateResponse(response);
    if (process && rows > 0) {
      setDataCards(response.data);
    }
  };

  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <View style={layoutStyle.center}>
          <Text>Metodos de pago</Text>
        </View>
        <View style={[layoutStyle.alignItemsEnd, layoutStyle.padding5]}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("New_payment_methods");
            }}
          >
            <Avatar.Icon size={40} icon="plus" />
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </>
  );
};

export default PaymentMethods;
