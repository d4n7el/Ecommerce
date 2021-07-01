import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { ScrollView, Text } from 'react-native';
import { UseLogin } from '../../context/login';
import Search from '../../components/search/Index';
import StatusBarCustom from '../../components/statusBar/Index';
import { meApi } from '../../api/users';
import Loading from '../../components/loading/Index';
import UserInfo from '../../components/account/UserInfo';
import Menu from '../../components/account/Menu';

const Account = () => {
  const [user, setUser] = useState(null);
  const { logOut } = UseLogin();
  const {
    auth: { token },
  } = UseLogin();

  const getDataMe = async () => {
    const response = await meApi(token);
    setUser(response.data);
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
        getDataMe();
      })();
    }, [])
  );

  return (
    <>
      <StatusBarCustom />
      <Search />

      {user ? (
        <ScrollView>
          <UserInfo user={user} />
          <Menu />
        </ScrollView>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Account;
