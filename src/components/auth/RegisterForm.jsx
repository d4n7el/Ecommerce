import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { layoutStyle, loginStyle } from '../../styles';
import { useFormik } from 'formik';
import Toast from 'react-native-root-toast';
import * as Yup from 'yup';
import { registerApi } from '../../api/users';
import colors from '../../styles/colors';

const RegisterForm = ({ setShowLogin }) => {
  const [loading, setLoading] = useState(false);

  const register = async (formData) => {
    const response = await registerApi(formData);

    setLoading(false);
    if (response && response.error) {
      Toast.show('Se presento un error, intenta mas tarde!', {
        position: Toast.positions.CENTER,
      });
    } else if (response.data) {
      setShowLogin(true);
    }
  };

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (formData) => {
      setLoading(true);
      register(formData);
    },
    validationSchema: Yup.object(validationSchema()),
  });

  return (
    <View style={layoutStyle.containerCenter}>
      <TextInput
        style={[loginStyle.inputLogin, layoutStyle.input]}
        label="Email"
        onChangeText={(text) => {
          formik.setFieldValue('email', text);
        }}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        style={[loginStyle.inputLogin, layoutStyle.input]}
        underlineColor={colors.opaque}
        label="Nombre"
        onChangeText={(text) => {
          formik.setFieldValue('username', text);
        }}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <TextInput
        style={[loginStyle.inputLogin, layoutStyle.input]}
        underlineColor={colors.opaque}
        secureTextEntry
        label="Contraseña"
        onChangeText={(text) => {
          formik.setFieldValue('password', text);
        }}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <TextInput
        style={[loginStyle.inputLogin, layoutStyle.input]}
        secureTextEntry
        label="Confirmar contraseña"
        onChangeText={(text) => {
          formik.setFieldValue('repeatPassword', text);
        }}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
      />
      <Button
        mode="contained"
        style={[layoutStyle.buttonContained, layoutStyle.button]}
        onPress={() => {
          formik.handleSubmit();
        }}
        loading={loading}
      >
        Registrarse
      </Button>
      <Button
        mode="outlined"
        style={[layoutStyle.buttonOutlined, layoutStyle.button]}
        color={colors.primary}
        onPress={() => setShowLogin(true)}
      >
        Iniciar sesión
      </Button>
    </View>
  );
};

export default RegisterForm;

const initialValues = () => ({
  email: '',
  username: '',
  password: '',
  repeatPassword: '',
});

const validationSchema = () => ({
  email: Yup.string().email(true).required(true),
  username: Yup.string().required(true),
  password: Yup.string().required(true),
  repeatPassword: Yup.string()
    .required(true)
    .oneOf([Yup.ref('password')]),
});
