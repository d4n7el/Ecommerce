export const sortDataForDate = (data = []) => {
  return data.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
};
