import { postRequestApi, getRequestApi, putRequestApi } from './base';

export const addressesApi = async (token, id) => {
  const response = await getRequestApi(`/addresses?user=${id}`, { token });
  return response;
};

export const AddAddressApi = async (token, data, id) => {
  console.log(id);
  console.log({ ...data, user: id });
  const response = await postRequestApi(
    `/addresses`,
    { ...data, user: id },
    { token }
  );
  return response;
};
