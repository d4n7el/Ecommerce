import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import { layoutStyle, addressStyle } from '../../styles';
import { IconButton } from 'react-native-paper';
import { addressesApi } from '../../api/address';
import { UseLogin } from '../../context/login';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import AddressList from '../../components/address/AddressList';

const Address = () => {
  const [listAddress, setListAddress] = useState(null);
  navigation = useNavigation();
  const {
    logOut,
    auth: { token, id },
  } = UseLogin();

  const getAddresses = async () => {
    console.log({ id });
    const response = await addressesApi(token, id);
    console.log(response);
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
    <ScrollView style={layoutStyle.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('addAddress');
        }}
      >
        <View style={addressStyle.addAddress}>
          <Text style={addressStyle.addressTex}>Añadir Direcciòn</Text>
          <IconButton icon="arrow-right" color="#000" size={19} />
        </View>
      </TouchableWithoutFeedback>
      <View style={[layoutStyle.padding40, layoutStyle.center]}>
        {!listAddress ? (
          <ActivityIndicator />
        ) : listAddress.length === 0 ? (
          <Button
            mode="outlined"
            icon="plus"
            style={layoutStyle.buttonSuccess}
            color={'white'}
            onPress={() => {
              navigation.navigate('addAddress');
            }}
          >
            Añadir Primer Direcciòn
          </Button>
        ) : (
          <AddressList />
        )}
      </View>
    </ScrollView>
  );
};

export default Address;
