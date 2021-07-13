import {
  postRequestApi,
  getRequestApi,
  putRequestApi,
  deleteRequestApi,
} from "./base";
import { validateResponse } from "../utils/function";

export const FavoritesMeApi = async (token, idUser) => {
  const response = await getRequestApi(`/favorites?user=${idUser}`, { token });
  return response;
};

export const newFavoriteApi = async (data, token) => {
  const response = await postRequestApi("/favorites", data, { token });
  return response;
};

export const deleteFavoriteApi = async (id, token) => {
  const response = await deleteRequestApi(`/favorites/${id}`, { token });
  return response;
};

export const FavoritesIdsMeApi = async (token, idUser) => {
  let data = [];
  const response = await getRequestApi(`/favorites?user=${idUser}`, { token });
  const { rows, process } = await validateResponse(response);
  if (process && rows > 0) {
    response.data.map((element) => {
      data = [
        ...data,
        { idFavorite: element._id, idProduct: element.product._id },
      ];
    });
  }

  return data;
};
