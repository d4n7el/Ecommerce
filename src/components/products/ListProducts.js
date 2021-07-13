import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";
import { FavoritesIdsMeApi } from "../../api/favorites";
import { productStyle } from "../../styles";
import ViewProduct from "./ViewProduct";
import { UseLogin } from "../../context/login";
import { newFavoriteApi, deleteFavoriteApi } from "../../api/favorites";

const ListProducts = ({ products }) => {
  const [favorites, setFavorites] = useState([]);
  const {
    auth: { token, id },
  } = UseLogin();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        getFavorites();
      })();
    }, [])
  );

  const updateFavorite = async (idProduct, like) => {
    const response = like ? AddFavorite(idProduct) : deleteFavorite(idProduct);
  };

  const AddFavorite = async (idProduct) => {
    const response = await newFavoriteApi(
      { product: idProduct, user: id },
      token
    );
    setFavorites([...favorites, { idProduct, idFavorite: response.data._id }]);
    return response;
  };

  const deleteFavorite = async (idProduct) => {
    const FavForDelete = favorites.filter((x) => x.idProduct === idProduct)[0]
      .idFavorite;
    const response = await deleteFavoriteApi(FavForDelete, token);
    setFavorites(favorites.filter((x) => x.idProduct !== idProduct));
    return response;
  };

  const getFavorites = async () => {
    const response = await FavoritesIdsMeApi(token, id);
    setFavorites(response || []);
  };

  return (
    <View style={[productStyle.container]}>
      {products &&
        favorites &&
        products.map((element) => {
          return (
            <ViewProduct
              key={element._id}
              element={element}
              isFav={
                favorites.filter((x) => x.idProduct === element._id).length ===
                1
              }
              updateFavorite={updateFavorite}
            />
          );
        })}
    </View>
  );
};

export default ListProducts;
