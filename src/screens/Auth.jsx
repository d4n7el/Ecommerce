import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView, Platform } from "react-native";
import RegisterForm from "../components/auth/RegisterForm";
import Login from "../components/auth/Login";
import { layoutStyle, loginStyle } from "../styles/index";
import logo from "../../assets/logo.png";
import { UseLogin } from "../context/login";

const Auth = () => {
  const { auth } = UseLogin();
  const [showLogin, setShowLogin] = useState(true);
  return (
    !auth && (
      <View style={layoutStyle.containerPrimary}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={[layoutStyle.widthAll, layoutStyle.containerPrimary]}
        >
          <Image source={logo} style={loginStyle.imgLogo} />
          {!showLogin && <RegisterForm setShowLogin={setShowLogin} />}
          {showLogin && <Login setShowLogin={setShowLogin} />}
        </KeyboardAvoidingView>
      </View>
    )
  );
};

export default Auth;
