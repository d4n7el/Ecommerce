import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { CreditCardInput } from "react-native-input-credit-card";
import { newPaymentMethodApy } from "../../api/paymentMethods";
import { UseLogin } from "../../context/login";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { validateResponse } from "../../utils/function";
import { PUBLIC_KEY_STRIPE } from "../../utils/secret";
const stripe = require("stripe-client")(PUBLIC_KEY_STRIPE);
import { layoutStyle } from "../../styles";

const NewPaymentMethods = () => {
  const [dataCard, setDataCard] = useState(null);
  const [infoTokenStripe, setInfoTokenStripe] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { auth } = UseLogin();

  const additionalInputsProps = {
    name: {
      maxLength: 40,
    },
  };

  useEffect(() => {
    if (dataCard && dataCard.valid) {
      getTokencard();
    }
  }, [dataCard]);

  const addCard = async () => {
    setLoading(true);
    const {
      card: { last4, name, brand },
      id,
    } = infoTokenStripe;
    const response = await newPaymentMethodApy(
      {
        last4,
        name,
        brand,
        token_stripe: id,
        user: auth.id,
      },
      auth.token
    );
    const { process } = await validateResponse(response);
    if (process) {
      setLoading(false);
      navigation.goBack();
    }
  };

  const getTokencard = async () => {
    const { cvc, expiry, number, type, name } = dataCard.values;
    const response = await stripe.createToken({
      card: {
        number,
        exp_month: expiry.split("/")[0],
        exp_year: expiry.split("/")[1],
        cvc,
        name,
      },
    });
    setInfoTokenStripe(response);
  };

  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <View>
          <CreditCardInput
            onChange={(form) => {
              setDataCard(form);
            }}
            allowScroll={true}
            additionalInputsProps={additionalInputsProps}
            requiresName={true}
          />
        </View>
        {dataCard && dataCard.valid && (
          <View style={layoutStyle.padding40}>
            <Button
              loading={loading}
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={layoutStyle.buttonContained}
              onPress={addCard}
            >
              Guardar
            </Button>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default NewPaymentMethods;
