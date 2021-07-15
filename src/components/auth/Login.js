import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import Toast from "react-native-root-toast";
import { loginApi } from "../../api/users";
import * as Yup from "yup";
import { UseLogin } from "../../context/login";

import { layoutStyle, loginStyle } from "../../styles";
import colors from "../../styles/colors";

const Login = ({ setShowLogin }) => {
  const [loading, setLoading] = useState(false);
  const { logIn, auth, logOut } = UseLogin();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      login(formData);
    },
  });

  const login = async (formData) => {
    const response = await loginApi(formData);
    setLoading(false);
    if (response && response.error) {
      Toast.show("Credenciales incorrectas", {
        position: Toast.positions.CENTER,
      });
    } else if (response && response.data) {
      logIn(response.data);
    }
  };

  return (
    <View style={layoutStyle.containerCenter}>
      {!auth && (
        <View style={layoutStyle.containerCenter}>
          <TextInput
            underlineColor={colors.opaque}
            style={[loginStyle.inputLogin, layoutStyle.input]}
            label="Email o usuario"
            value={formik.values.identifier}
            error={formik.errors.identifier}
            onChangeText={(text) => {
              formik.setFieldValue("identifier", text);
            }}
          />

          <TextInput
            underlineColor={colors.opaque}
            style={[loginStyle.inputLogin, layoutStyle.input]}
            secureTextEntry
            label="Contraseña"
            value={formik.values.password}
            error={formik.errors.password}
            onChangeText={(text) => {
              formik.setFieldValue("password", text);
            }}
          />

          <Button
            style={[layoutStyle.buttonContained, layoutStyle.button]}
            mode="contained"
            onPress={() => {
              formik.handleSubmit();
            }}
            loading={loading}
          >
            Iniciar sesión
          </Button>
          <Button
            style={[layoutStyle.buttonOutlined, layoutStyle.button]}
            mode="outlined"
            color={colors.third}
            onPress={() => setShowLogin(false)}
          >
            Registrarse
          </Button>
        </View>
      )}
    </View>
  );
};

export default Login;

const initialValues = () => ({
  identifier: "",
  password: "",
});

const validationSchema = () => ({
  identifier: Yup.string().required(true),
  password: Yup.string().required(true),
});
