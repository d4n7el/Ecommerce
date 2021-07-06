import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { layoutStyle } from '../../styles';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { meApi, updateMeApi } from '../../api/users';
import { UseLogin } from '../../context/login';
import Toast from 'react-native-root-toast';

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    auth: { token, id },
  } = UseLogin();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        getDataMe();
      })();
    }, [])
  );

  const getDataMe = async () => {
    const response = await meApi(token);
    response.data.name && formik.setFieldValue('name', response.data.name);
    response.data.last_name &&
      formik.setFieldValue('last_name', response.data.last_name);
    response.data.email && formik.setFieldValue('email', response.data.email);
    response.data.username &&
      formik.setFieldValue('username', response.data.username);
  };

  const saveMe = async (formData) => {
    const response = await updateMeApi(token, id, formData);

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

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      saveMe(formData);
    },
  });

  return (
    <ScrollView style={layoutStyle.padding40}>
      <View>
        <TextInput
          style={layoutStyle.input}
          label="Nombre"
          onChangeText={(text) => {
            formik.setFieldValue('name', text);
          }}
          error={formik.errors.name}
          value={formik.values.name}
        />
        <TextInput
          style={layoutStyle.input}
          label="Apellido"
          onChangeText={(text) => {
            formik.setFieldValue('last_name', text);
          }}
          error={formik.errors.last_name}
          value={formik.values.last_name}
        />
        <TextInput
          style={layoutStyle.input}
          label="Username"
          onChangeText={(text) => {
            formik.setFieldValue('username', text);
          }}
          error={formik.errors.username}
          value={formik.values.username}
        />
        <TextInput
          style={layoutStyle.input}
          label="Email"
          onChangeText={(text) => {
            formik.setFieldValue('email', text);
          }}
          error={formik.errors.email}
          value={formik.values.email}
        />
        <Button
          mode="contained"
          onPress={() => {
            formik.handleSubmit();
          }}
          style={layoutStyle.buttonSuccess}
          loading={loading}
        >
          Update
        </Button>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;

const initialValues = () => ({
  name: '',
  last_name: '',
  email: '',
  username: '',
});

const validationSchema = () => ({
  name: Yup.string().required(true),
  last_name: Yup.string().required(true),
  email: Yup.string().email(true).required(true),
});
