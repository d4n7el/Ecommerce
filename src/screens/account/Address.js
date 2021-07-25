import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { layoutStyle, addressStyle } from "../../styles";
import { IconButton } from "react-native-paper";
import { addressesApi } from "../../api/address";
import { UseLogin } from "../../context/login";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import AddressList from "../../components/address/AddressList";
import colors from "../../styles/colors";

const Address = () => {
  const [listAddress, setListAddress] = useState(null);
  const navigation = useNavigation();
  const {
    logOut,
    auth: { token, id },
  } = UseLogin();

  const getAddresses = async () => {
    const response = await addressesApi(token, id);
    if (response && response.status >= 200 && response.status <= 204) {
      setListAddress(response.data ? response.data : []);
    }
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
        getAddresses();
      })();
    }, [])
  );

  return (
    <ScrollView>
      <View style={layoutStyle.padding20}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("addAddress");
          }}
        >
          <View style={[addressStyle.addAddress]}>
            <Text style={addressStyle.addressTex}>Añadir Dirección</Text>
            <IconButton icon="arrow-right" color="#000" size={19} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={layoutStyle.padding20}>
        {!listAddress ? (
          <ActivityIndicator />
        ) : listAddress.length === 0 ? (
          <Button
            mode="outlined"
            icon="plus"
            style={[layoutStyle.buttonWarning]}
            color={colors.warning}
            onPress={() => {
              navigation.navigate("addAddress");
            }}
          >
            Añadir Primer Dirección
          </Button>
        ) : (
          <AddressList addresses={listAddress} />
        )}
      </View>
    </ScrollView>
  );
};

export default Address;
