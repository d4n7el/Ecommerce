import { postRequestApi, getRequestApi, putRequestApi } from "./base";

export const registerApi = async (formData) => {
  const customerStrapi = await postRequestApi("/strapi-customers", formData);
  formData.strapi_customer = customerStrapi.data.userStripeLocal.id;
  const response = await postRequestApi("/auth/local/register", formData);
  return response;
};

export const loginApi = async (formData) => {
  const response = await postRequestApi("/auth/local", formData);
  return response;
};

export const meApi = async (token) => {
  const response = await getRequestApi("/users/me", { token });
  return response;
};

export const updateMeApi = async (token, id, data) => {
  const response = await putRequestApi(`/users/${id}`, data, { token });
  return response;
};
