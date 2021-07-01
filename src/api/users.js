import { postRequestApi, getRequest, putRequest } from './base';

export const registerApi = async (formData) => {
  const response = await postRequestApi('/auth/local/register', formData);
  return response;
};

export const loginApi = async (formData) => {
  const response = await postRequestApi('/auth/local', formData);
  return response;
};

export const meApi = async (token) => {
  const response = await getRequest('/users/me', { token });
  return response;
};

export const updateMeApi = async (token, id, data) => {
  console.log(token, id, data);
  const response = await putRequest(`/users/${id}`, data, { token });
  return response;
};
