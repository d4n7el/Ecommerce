import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { layoutStyle } from '../../styles';
import { UseLogin } from '../../context/login';
import { TextInput, Button } from 'react-native-paper';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { updateMeApi } from '../../api/users';
import Toast from 'react-native-root-toast';

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const {
    logOut,
    auth: { token, id },
  } = UseLogin();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formdata) => {
      setLoading(true);
      savePass(formdata);
    },
  });

  const savePass = async (formdata) => {
    const response = await updateMeApi(token, id, formdata);
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
      logOut();
    }
  };

  return (
    <ScrollView>
      <View style={layoutStyle.padding40}>
        <TextInput
          style={layoutStyle.input}
          label={'Password'}
          error={formik.errors.password}
          value={formik.values.password}
          onChangeText={(text) => {
            formik.setFieldValue('password', text);
          }}
          secureTextEntry
        />
        <TextInput
          style={layoutStyle.input}
          label={'Repeat password'}
          error={formik.errors.repeatPassword}
          value={formik.values.repeatPassword}
          onChangeText={(text) => {
            formik.setFieldValue('repeatPassword', text);
          }}
          secureTextEntry
        />
        <Button
          style={layoutStyle.buttonWarning}
          mode="contained"
          loading={loading}
          onPress={formik.handleSubmit}
        >
          Save
        </Button>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;

const initialValues = () => ({
  password: '',
  repeatPassword: '',
});

const validationSchema = () => ({
  password: Yup.string().required(true),
  repeatPassword: Yup.string()
    .required(true)
    .oneOf([Yup.ref('password')]),
});
