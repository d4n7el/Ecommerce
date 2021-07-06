import axios from 'axios';

const BASE_URL_API = 'http://192.168.20.29:1337';

export const postRequestApi = async (path, data, options, skipRetry) => {
  try {
    const response = await axios.post(
      `${BASE_URL_API}${path}`,
      data,
      await getHeaders(options || {})
    );
    return response;
  } catch (error) {
    return await handleAPIError(error, options, skipRetry, () => {
      return getRequest(path, options, true);
    });
  }
};

export const getRequestApi = async (path, options, skipRetry) => {
  try {
    return await axios.get(
      `${BASE_URL_API}${path}`,
      await getHeaders(options || {})
    );
  } catch (error) {
    return await handleAPIError(error, options, skipRetry, () => {
      return getRequest(path, options, true);
    });
  }
};

export const putRequestApi = async (path, data, options, skipRetry) => {
  try {
    return await axios.put(
      `${BASE_URL_API}${path}`,
      data,
      await getHeaders(options || {})
    );
  } catch (error) {
    return await handleAPIError(error, options, skipRetry, () => {
      return putRequest(path, data, options, true);
    });
  }
};

const getHeaders = async ({ token }) => {
  // TODO: get token from redux as normal workflow
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {};
};

const handleAPIError = async (error, options, skipRetry, onRetry) => {
  if (error.response.status === 401) {
    return { error, response: error.response };
  } else {
    return error.response;
  }
};
