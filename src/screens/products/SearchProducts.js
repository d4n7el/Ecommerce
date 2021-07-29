import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { layoutStyle } from '../../styles';
import { productsSearchApi } from '../../api/products';
import Search from '../../components/search';
import StatusBarCustom from '../../components/statusBar/Index';
import ListProducts from '../../components/products/ListProducts';
import colors from '../../styles/colors';

const SearchProducts = (props) => {
  const [dataProducts, setDataProducts] = useState([]);
  const {
    route: { params },
  } = props;

  const getProducts = async () => {
    const response = await productsSearchApi(params.search);
    setDataProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, [params.search]);

  return (
    <>
      <StatusBarCustom
        bgcolorSafeAreaView={colors.applicationBackground}
        colorSafeAreaView="dark-content"
      />
      <Search />
      <ScrollView style={layoutStyle.padding5}>
        {dataProducts && <ListProducts products={dataProducts} />}
      </ScrollView>
    </>
  );
};

export default SearchProducts;
