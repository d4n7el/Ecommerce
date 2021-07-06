import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { layoutStyle } from '../../styles';
import { AddAddressApi } from '../../api/address';
import { UseLogin } from '../../context/login';

const AddAddress = () => {
  const {
    auth: { token, id },
  } = UseLogin();

  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formdata) => {
      setLoading(true);
      newAddress(formdata);
    },
  });

  const newAddress = async (formdata) => {
    const response = await AddAddressApi(token, formdata, id);
    setLoading(false);
    if (!response || !response.status || response.status > 204) {
      Toast.show(
        response.data.message[0].messages[0].message ||
          'Se presento un error al actualizar los datos',
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
        <TextInput
          label="Title"
          style={layoutStyle.input}
          value={formik.values.title}
          error={formik.errors.title}
          onChangeText={(text) => {
            formik.setFieldValue('title', text);
          }}
        />
        <TextInput
          label="Last name"
          style={layoutStyle.input}
          value={formik.values.last_name}
          error={formik.errors.last_name}
          onChangeText={(text) => {
            formik.setFieldValue('last_name', text);
          }}
        />
        <TextInput
          label="Postal code"
          style={layoutStyle.input}
          value={formik.values.postal_code}
          error={formik.errors.postal_code}
          onChangeText={(text) => {
            formik.setFieldValue('postal_code', text);
          }}
        />
        <TextInput
          label="City"
          style={layoutStyle.input}
          value={formik.values.city}
          error={formik.errors.city}
          onChangeText={(text) => {
            formik.setFieldValue('city', text);
          }}
        />
        <TextInput
          label="State"
          style={layoutStyle.input}
          value={formik.values.state}
          error={formik.errors.state}
          onChangeText={(text) => {
            formik.setFieldValue('state', text);
          }}
        />
        <TextInput
          label="Country"
          style={layoutStyle.input}
          value={formik.values.country}
          error={formik.errors.country}
          onChangeText={(text) => {
            formik.setFieldValue('country', text);
          }}
        />
        <TextInput
          label="Phone"
          style={layoutStyle.input}
          value={formik.values.phone}
          error={formik.errors.phone}
          onChangeText={(text) => {
            formik.setFieldValue('phone', text);
          }}
        />
        <TextInput
          label="Address"
          style={layoutStyle.input}
          value={formik.values.address}
          error={formik.errors.address}
          onChangeText={(text) => {
            formik.setFieldValue('address', text);
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
          save
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddAddress;

const initialValues = () => ({
  title: '',
  last_name: '',
  postal_code: '',
  city: '',
  state: '',
  country: '',
  phone: '',
  address: '',
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
