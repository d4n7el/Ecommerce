import React, { useCallback, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { layoutStyle, productStyle } from '../../styles';
import StatusBarCustom from '../../components/statusBar/Index';
import Search from '../../components/search/index';
import { FavoritesMeApi } from '../../api/favorites';
import { useFocusEffect } from '@react-navigation/native';
import { UseLogin } from '../../context/login';
import ViewProduct from '../../components/products/ViewProduct';
import { deleteFavoriteApi } from '../../api/favorites';
import { validateResponse } from '../../utils/function';
import colors from '../../styles/colors';

const Favorites = () => {
  const [favorites, setFavorites] = useState(null);
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

  const getFavorites = async () => {
    const response = await FavoritesMeApi(token, id);
    if (
      response &&
      response.status &&
      response.status >= 200 &&
      response.status <= 204
    ) {
      setFavorites(response.data);
    }
  };

  const deleteFavorites = async (idProduct, like) => {
    const FavForRemove = favorites.filter(
      (fav) => fav.product._id === idProduct
    );
    const response = await deleteFavoriteApi(FavForRemove[0]._id, token);
    const { process } = await validateResponse(response);
    if (process) {
      getFavorites();
    }
  };

  return (
    <>
      <StatusBarCustom
        bgcolorSafeAreaView={colors.applicationBackground}
        colorSafeAreaView="dark-content"
      />
      <Search />
      <ScrollView style={layoutStyle.padding5}>
        <View style={[productStyle.container]}>
          {favorites &&
            favorites.map((element) => {
              return (
                <ViewProduct
                  key={element._id}
                  element={element.product}
                  isFav
                  updateFavorite={deleteFavorites}
                />
              );
            })}
        </View>
      </ScrollView>
    </>
  );
};

export default Favorites;
