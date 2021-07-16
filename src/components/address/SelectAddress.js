import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { addressesApi } from "../../api/address";
import { UseLogin } from "../../context/login";
import { addressStyle, layoutStyle } from "../../styles";
import { validateResponse } from "../../utils/function";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SelectAddress = ({
  limit,
  setLimit,
  currentAddress,
  setCurrentAddress,
}) => {
  const [addresses, setAddresses] = useState(null);
  const [onlySelected, setOnlySelected] = useState(null);
  const {
    auth: { token, id },
  } = UseLogin();

  const navigation = useNavigation();

  const getAddresses = async () => {
    if (id) {
      const response = await addressesApi(token, id, limit, currentAddress);
      const { process, rows } = await validateResponse(response);
      if (process) {
        setAddresses(rows > 0 ? response.data : []);
        setOnlySelected(null);
        limit === 1
          ? setCurrentAddress(rows > 0 ? response.data[0]._id : null)
          : setCurrentAddress(null);
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
        getAddresses();
      })();
    }, [limit])
  );

  return (
    <View style={addressStyle.containerList}>
      <Text style={addressStyle.titleSelect}>Selecciona tu direccion</Text>
      <View style={[layoutStyle.container]}>
        {addresses &&
          addresses.map((element) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  setCurrentAddress(element._id);
                  setOnlySelected(element._id);
                }}
              >
                <View
                  style={[
                    currentAddress === element._id
                      ? addressStyle.itemListSelected
                      : addressStyle.itemList,
                  ]}
                >
                  <View
                    style={[
                      layoutStyle.containerInLine,
                      layoutStyle.alignItemsCenter,
                    ]}
                  >
                    <View>
                      <Text style={addressStyle.titleAddress}>
                        <AwesomeIcon
                          name={"home"}
                          size={20}
                          color={colors.warning}
                          style={addressStyle.iconListSelect}
                        />
                      </Text>
                    </View>
                    <View>
                      <Text style={addressStyle.titleAddress}>
                        {element.title}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      layoutStyle.containerInLine,
                      layoutStyle.alignItemsCenter,
                      addressStyle.infoAddress,
                    ]}
                  >
                    <View>
                      <Text
                        style={
                          currentAddress === element._id
                            ? addressStyle.textInfoAddressSelected
                            : addressStyle.textInfoAddress
                        }
                      >
                        {`${element.address}`}
                      </Text>
                      <Text
                        style={
                          currentAddress === element._id
                            ? addressStyle.textInfoAddressSelected
                            : addressStyle.textInfoAddress
                        }
                      >
                        {`${element.country} -  ${element.state} - ${element.city}`}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        {addresses && addresses.length === 0 && (
          <Button
            icon="sort-variant"
            mode="contained"
            style={[layoutStyle.buttonContained, layoutStyle.button]}
            onPress={() => navigation.navigate("addAddress")}
          >
            Ingresa una nueva direccion
          </Button>
        )}
        {limit === 1 && addresses && addresses.length > 0 && (
          <Button
            icon="sort-variant"
            mode="contained"
            style={[layoutStyle.buttonContained, layoutStyle.button]}
            onPress={() => setLimit(null)}
          >
            Ver mas direcciones
          </Button>
        )}
      </View>
    </View>
  );
};

export default SelectAddress;
