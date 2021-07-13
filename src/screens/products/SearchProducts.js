import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { layoutStyle } from "../../styles";
import { productsSearchApi } from "../../api/products";
import ViewProduct from "../../components/products/ViewProduct";
import { productStyle } from "../../styles";
import Search from "../../components/search";
import StatusBarCustom from "../../components/statusBar/Index";

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
      <StatusBarCustom />
      <Search />
      <ScrollView style={layoutStyle.padding5}>
        <View style={[productStyle.container]}>
          {dataProducts &&
            dataProducts.map((element) => {
              return <ViewProduct key={element._id} element={element} />;
            })}
        </View>
      </ScrollView>
    </>
  );
};

export default SearchProducts;
