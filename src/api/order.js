import {
  postRequestApi,
  getRequestApi,
  putRequestApi,
  deleteRequestApi,
} from "./base";

export const createOrderApy = async (
  token,
  idUser,
  currentCard,
  products,
  address,
  total
) => {
  const response = await postRequestApi(
    "/orders/new",
    { idUser, currentCard, products, address, total },
    { token }
  );
  return response;
};
