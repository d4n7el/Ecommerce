import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { layoutStyle } from '../../styles';
import { menuStyle } from '../../styles';

const UserInfo = ({ user }) => {
  return (
    <View style={[menuStyle.conatiner]}>
      <Text style={menuStyle.title}>{`Binevenido,`}</Text>
      <Text style={menuStyle.titleName}>{`${
        user.name ? user.name : user.email
      }`}</Text>
    </View>
  );
};

export default UserInfo;
