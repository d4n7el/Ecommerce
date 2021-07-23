import {
  postRequestApi,
  getRequestApi,
  putRequestApi,
  deleteRequestApi,
} from "./base";

export const getPaymentMethodsApy = async (
  token,
  idUser,
  active = null,
  limit
) => {
  const paramActive = active !== null ? `&active=${active ? 1 : 0}` : ``;
  const paramLimit = limit ? `&_limit=${limit}` : ``;
  const response = await getRequestApi(
    `/payment-methods?user=${idUser}${paramLimit}`,
    {
      token,
    }
  );
  return response;
};

export const newPaymentMethodApy = async (data, token) => {
  const response = await postRequestApi("/payment-methods", data, { token });
  return response;
};

export const deletePaymentMethodApy = async (id, token) => {
  const response = await deleteRequestApi(`/payment-methods/${id}`, { token });
  return response;
};
