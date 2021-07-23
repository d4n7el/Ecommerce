import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getPaymentMethodsApy } from "../../api/paymentMethods";
import { validateResponse } from "../../utils/function";
import { UseLogin } from "../../context/login";
import { layoutStyle, cardStyle, backgroundImage } from "../../styles";
import { IMAGES_CARDS } from "../../utils/const";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SelectCard = ({ currentCard, setCurrentCard, setLimit, limit }) => {
  const navigation = useNavigation();
  const {
    auth: { id, token },
  } = UseLogin();
  const [dataCards, setDataCards] = useState([]);
  useFocusEffect(
    useCallback(() => {
      (async () => {
        setDataCards([]);
        getCards();
      })();
    }, [limit])
  );

  const getCards = async () => {
    const response = await getPaymentMethodsApy(token, id, false, limit);
    const { process, rows } = await validateResponse(response);
    if (process && rows > 0) {
      setDataCards(response.data);
    }
  };

  return (
    <View style={[layoutStyle.content1, layoutStyle.padding20]}>
      <Text style={[layoutStyle.title, layoutStyle.padding20]}>
        Selecciona el metodo de pago
      </Text>
      {dataCards &&
        dataCards.map((card) => {
          const nameFile = `${card.brand.toLowerCase().replace(" ", "")}`;
          return (
            <TouchableWithoutFeedback
              key={card._id}
              onPress={() => setCurrentCard(card.token_stripe)}
            >
              <View
                style={[
                  layoutStyle.container,
                  currentCard === card.token_stripe
                    ? cardStyle.itemCardSelectSelected
                    : cardStyle.itemCardSelect,
                  layoutStyle.centerInLine,
                ]}
              >
                <View style={[cardStyle.containerImg]}>
                  <ImageBackground
                    source={IMAGES_CARDS[nameFile]}
                    resizeMode="contain"
                    style={backgroundImage.image}
                  ></ImageBackground>
                </View>
                <View
                  style={[
                    cardStyle.infoSelectCard,
                    layoutStyle.centerInLineBetWeenBase,
                  ]}
                >
                  <Text
                    style={[
                      currentCard === card.token_stripe
                        ? cardStyle.textInfoSelected
                        : cardStyle.textInfo,

                      layoutStyle.bold,
                    ]}
                  >
                    {card.last4}
                  </Text>
                  <Text
                    style={
                      currentCard === card.token_stripe
                        ? cardStyle.textInfoSelected
                        : cardStyle.textInfo
                    }
                  >
                    {card.name}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      {dataCards && (
        <>
          <Button
            icon="plus"
            mode="contained"
            style={[layoutStyle.buttonContained, layoutStyle.button]}
            onPress={() => {
              navigation.navigate("new_payment_methods");
            }}
          >
            Ingresa nuevo metodo de pagos
          </Button>
          {limit !== null && (
            <Button
              icon="sort-variant"
              mode="contained"
              style={[layoutStyle.buttonContained, layoutStyle.button]}
              onPress={() => {
                setLimit(null);
              }}
            >
              Ver todos los metodos de pago
            </Button>
          )}
        </>
      )}
    </View>
  );
};

export default SelectCard;
