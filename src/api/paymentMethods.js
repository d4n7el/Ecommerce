import {
  postRequestApi,
  getRequestApi,
  putRequestApi,
  deleteRequestApi,
} from "./base";

export const getPaymentMethodsApy = async (token, idUser) => {
  const response = await getRequestApi(`/payment-methods?user=${idUser}`, {
    token,
  });
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
