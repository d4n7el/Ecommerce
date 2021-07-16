import {
  postRequestApi,
  getRequestApi,
  putRequestApi,
  deleteRequestApi,
} from "./base";

export const addressesApi = async (token, id, limit) => {
  const paramsLimit = limit ? `&_limit=${limit}` : "";
  const response = await getRequestApi(`/addresses?user=${id}${paramsLimit}`, {
    token,
  });
  return response;
};

export const addressApi = async (token, id) => {
  const response = await getRequestApi(`/addresses/${id}`, { token });
  return response;
};

export const AddAddressApi = async (token, data, id) => {
  const response = await postRequestApi(
    `/addresses`,
    { ...data, user: id },
    { token }
  );
  return response;
};

export const updateAddressApi = async (token, id, data) => {
  const response = await putRequestApi(`/addresses/${id}`, data, { token });
  return response;
};

export const deleteAddressApi = async (token, id) => {
  const response = await deleteRequestApi(`/addresses/${id}`, { token });
  return response;
};
