import React, { useMemo, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const logInContext = React.createContext();

export const LogInProvider = (props) => {
  const TOKEN = "token";
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem(TOKEN);
      if (token) {
        setAuth({ token: token, id: jwtDecode(token).id });
      }
    })();
  }, []);

  const logIn = async (user) => {
    setAuth({ token: user.jwt, id: user.user_id });
    await AsyncStorage.setItem(TOKEN, user.jwt);
  };

  const logOut = async (user) => {
    setAuth(null);
    await AsyncStorage.removeItem(TOKEN);
  };

  const value = useMemo(() => {
    return {
      logIn,
      auth,
      logOut,
    };
  }, [auth]);

  return <logInContext.Provider value={value} {...props} />;
};

export function UseLogin() {
  const context = React.useContext(logInContext);

  return context;
}
