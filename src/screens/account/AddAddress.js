import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFormik } from "formik";
import * as Yup from "yup";
import { layoutStyle } from "../../styles";
import { AddAddressApi } from "../../api/address";
import { UseLogin } from "../../context/login";
import {
  addressApi,
  updateAddressApi,
  deleteAddressApi,
} from "../../api/address";
import { useNavigation } from "@react-navigation/native";
import colors from "../../styles/colors";

const AddAddress = ({ route: { params } }) => {
  const {
    auth: { token, id },
  } = UseLogin();

  const [loading, setLoading] = useState(false);
  const [loadAddress, setLoadAddress] = useState(false);
  const [idAddress, setIdAddress] = useState(params?.idAddress);

  const navigation = useNavigation();

  useEffect(() => {
    getAddress();
  }, [idAddress]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formdata) => {
      setLoading(true);
      !idAddress ? newAddress(formdata) : updateAddress(formdata);
    },
  });

  const deleteAddress = async () => {
    const response = await deleteAddressApi(token, idAddress);
    if (
      response &&
      response.status &&
      response.status >= 200 &&
      response.status <= 204
    ) {
      setLoading(false);
      navigation.goBack();
    }
  };

  const updateAddress = async (formdata) => {
    const response = await updateAddressApi(token, idAddress, formdata);
    if (
      response &&
      response.status &&
      response.status >= 200 &&
      response.status <= 204
    ) {
      setLoading(false);
      navigation.goBack();
    }
  };

  const confirmDelete = () => {
    Alert.alert("Delete address", "do you want to delete the address?", [
      {
        text: "YES",
        onPress: () => {
          deleteAddress();
        },
      },
      { text: "NOT" },
    ]);
  };

  const getAddress = async () => {
    const response = await addressApi(token, idAddress);

    if (
      response &&
      response.status &&
      response.status >= 200 &&
      response.status <= 204
    ) {
      const {
        title,
        last_name,
        postal_code,
        city,
        state,
        country,
        phone,
        address,
      } = response.data;
      formik.setFieldValue("title", title);
      formik.setFieldValue("last_name", last_name);
      formik.setFieldValue("postal_code", postal_code);
      formik.setFieldValue("city", city);
      formik.setFieldValue("state", state);
      formik.setFieldValue("country", country);
      formik.setFieldValue("phone", phone);
      formik.setFieldValue("address", address);
      setLoadAddress(true);
    }
  };

  const newAddress = async (formdata) => {
    const response = await AddAddressApi(token, formdata, id);
    setLoading(false);
    if (!response || !response.status || response.status > 204) {
      Toast.show(
        response.data.message[0].messages[0].message ||
          "Se presento un error al actualizar los datos",
        {
          position: Toast.positions.CENTER,
        }
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={25}>
      <View style={[layoutStyle.container, layoutStyle.padding40]}>
        {idAddress && !loadAddress && <ActivityIndicator />}
        <Text style={layoutStyle.title}>
          {idAddress ? "Update address" : "Add address"}
        </Text>

        <TextInput
          label="Title"
          style={layoutStyle.input}
          value={formik.values.title}
          error={formik.errors.title}
          onChangeText={(text) => {
            formik.setFieldValue("title", text);
          }}
        />
        <TextInput
          label="Last name"
          style={layoutStyle.input}
          value={formik.values.last_name}
          error={formik.errors.last_name}
          onChangeText={(text) => {
            formik.setFieldValue("last_name", text);
          }}
        />
        <TextInput
          label="Postal code"
          style={layoutStyle.input}
          value={formik.values.postal_code}
          error={formik.errors.postal_code}
          onChangeText={(text) => {
            formik.setFieldValue("postal_code", text);
          }}
        />
        <TextInput
          label="City"
          style={layoutStyle.input}
          value={formik.values.city}
          error={formik.errors.city}
          onChangeText={(text) => {
            formik.setFieldValue("city", text);
          }}
        />
        <TextInput
          label="State"
          style={layoutStyle.input}
          value={formik.values.state}
          error={formik.errors.state}
          onChangeText={(text) => {
            formik.setFieldValue("state", text);
          }}
        />
        <TextInput
          label="Country"
          style={layoutStyle.input}
          value={formik.values.country}
          error={formik.errors.country}
          onChangeText={(text) => {
            formik.setFieldValue("country", text);
          }}
        />
        <TextInput
          label="Phone"
          style={layoutStyle.input}
          value={formik.values.phone}
          error={formik.errors.phone}
          onChangeText={(text) => {
            formik.setFieldValue("phone", text);
          }}
        />
        <TextInput
          label="Address"
          style={layoutStyle.input}
          value={formik.values.address}
          error={formik.errors.address}
          onChangeText={(text) => {
            formik.setFieldValue("address", text);
          }}
        />
        <Button
          style={layoutStyle.buttonSuccess}
          loading={loading}
          color="white"
          onPress={() => {
            formik.handleSubmit();
          }}
        >
          {idAddress ? "update" : "save"}
        </Button>
        {idAddress && (
          <Button
            style={[layoutStyle.buttonWarning, layoutStyle.button]}
            loading={loading}
            color={colors.warning}
            mode="outlined"
            onPress={() => {
              confirmDelete();
            }}
          >
            delete
          </Button>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddAddress;

const initialValues = () => ({
  title: "",
  last_name: "",
  postal_code: "",
  city: "",
  state: "",
  country: "",
  phone: "",
  address: "",
});

const validationSchema = () => ({
  title: Yup.string().required(true),
  last_name: Yup.string().required(true),
  postal_code: Yup.string().required(true),
  city: Yup.string().required(true),
  state: Yup.string().required(true),
  country: Yup.string().required(true),
  phone: Yup.string().required(true),
  address: Yup.string().required(true),
});
