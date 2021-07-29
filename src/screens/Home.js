import React from 'react';
import { ScrollView } from 'react-native';
import { layoutStyle } from '../styles';
import { UseLogin } from '../context/login';
import Search from '../components/search';
import StatusBarCustom from '../components/statusBar/Index';
import NewProducts from '../components/products/NewProducts';
import colors from '../styles/colors';

const Home = () => {
  const { logOut } = UseLogin();
  return (
    <>
      <StatusBarCustom
        bgcolorSafeAreaView={colors.applicationBackground}
        colorSafeAreaView="dark-content"
      />
      <Search />
      <ScrollView style={layoutStyle.padding5}>
        <NewProducts />
      </ScrollView>
    </>
  );
};

export default Home;
