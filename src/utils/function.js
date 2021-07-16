export const sortDataForDate = (data = [], item = "data") => {
  return data.sort(function (a, b) {
    return new Date(b[item]) - new Date(a[item]);
  });
};

export const validateResponse = async (response) => {
  if (response) {
    if (response.status && response.status >= 200 && response.status <= 204) {
      if (response.data) {
        if (response.data.length > 0) {
          return {
            status: response.status,
            message: "ok",
            process: true,
            rows: response.data.length,
          };
        } else {
          return {
            status: response.status,
            message: "no records",
            process: true,
            flag: 1,
            rows: 0,
          };
        }
      } else {
        return {
          status: response.status,
          message: response,
          process: false,
          flag: 2,
          rows: 0,
        };
      }
    } else {
      return {
        status: response.status,
        message: response,
        process: false,
        flag: 3,
        rows: 0,
      };
    }
  } else {
    return {
      status: 500,
      message: "error request",
      process: false,
      flag: 4,
      rows: 0,
    };
  }
};
