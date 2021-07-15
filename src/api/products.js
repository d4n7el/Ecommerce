import {
  postRequestApi,
  getRequestApi,
  putRequestApi,
  deleteRequestApi,
} from "./base";

export const productsApi = async (token) => {
  const response = await getRequestApi(`/products`, { token });
  return response;
};

export const productApi = async (slug) => {
  const response = await getRequestApi(`/products/${slug}`);
  return response;
};

export const productLastsApi = async (limit = 10) => {
  const response = await getRequestApi(
    `/products?_limit=${limit}&_sort=createAt:DESC`,
    {}
  );
  return response;
};

export const productsSearchApi = async (search) => {
  const response = await getRequestApi(`/products?_q=${search}`, {});
  return response;
};

export const productsForIdApi = async (id) => {
  const response = await getRequestApi(`/products?_id=${id}`, {});
  return response;
};
