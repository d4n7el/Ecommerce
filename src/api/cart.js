import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITEM_CART_STORAGE } from "../utils/const";
import { sortDataForDate } from "../utils/function";

export const getCartStorage = async () => {
  const stringCart = await AsyncStorage.getItem(ITEM_CART_STORAGE);
  if (stringCart) {
    let cart = await sortDataForDate(JSON.parse(stringCart));
    return cart;
  } else {
    return [];
  }
};

export const updateCartStorage = async (idProduct, quantity = 1) => {
  let cart = await getCartStorage();
  let [idProductExist] = cart.filter((p) => p.idProduct === idProduct);
  if (idProductExist && idProductExist !== undefined) {
    cart = cart.filter((h) => h.idProduct !== idProduct);
    idProductExist.quantity += quantity;
    cart.push(idProductExist);
  } else {
    cart.push({
      idProduct,
      quantity,
      date: new Date(),
    });
  }

  await AsyncStorage.setItem(ITEM_CART_STORAGE, JSON.stringify(cart));
};

export const deleteCartStorage = async (idProduct) => {
  let cart = await getCart();
  cart = cart.filter((p) => p.idProduct !== idProduct);

  await AsyncStorage.setItem(ITEM_CART_STORAGE, JSON.stringify(cart));
};
