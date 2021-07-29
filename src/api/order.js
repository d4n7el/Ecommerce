import {
  postRequestApi,
  getRequestApi,
  putRequestApi,
  deleteRequestApi,
} from './base';

export const createOrderApy = async (
  token,
  idUser,
  currentCard,
  products,
  address,
  total
) => {
  const response = await postRequestApi(
    '/orders/new',
    { idUser, currentCard, products, address, total },
    { token }
  );
  return response;
};

export const getOrdersApi = async (token, limit = 20) => {
  const paramLimit = limit ? `?_limit=${limit}` : ``;
  const response = await getRequestApi(`/orders${paramLimit}`, { token });
  return response;
};

export const getOrderApi = async (token, id) => {
  const response = await getRequestApi(`/orders/${id}`, { token });
  return response;
};
