import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITEM_HISTORY_STORAGE, LIMIT_HISTORY_SEARCH } from "../utils/const";
import { sortDataForDate } from "../utils/function";

export const getSearchHistory = async () => {
  const stringHistory = await AsyncStorage.getItem(ITEM_HISTORY_STORAGE);
  if (stringHistory) {
    let history = await sortDataForDate(JSON.parse(stringHistory));
    if (history.length > LIMIT_HISTORY_SEARCH) history.pop();
    return history;
  } else {
    return [];
  }
};

export const updateSearchHistory = async (newSearch) => {
  let history = await getSearchHistory();
  history = history.filter((h) => h.search !== newSearch);
  history.push({
    search: newSearch,
    date: new Date(),
  });

  await AsyncStorage.setItem(ITEM_HISTORY_STORAGE, JSON.stringify(history));
};

export const deleteSearchHistory = async (search) => {
  let history = await getSearchHistory();
  history = history.filter((h) => h.search !== search);

  await AsyncStorage.setItem(ITEM_HISTORY_STORAGE, JSON.stringify(history));
};
