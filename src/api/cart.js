import AsyncStorage from '@react-native-async-storage/async-storage';
import { ITEM_CART_STORAGE } from '../utils/const';
import { sortDataForDate } from '../utils/function';

export const getCartStorageProducts = async (idUser) => {
  let stringcart = await AsyncStorage.getItem(idUser);
  let cart = stringcart ? JSON.parse(stringcart) : {};

  if (!cart.products) {
    cart.products = [];
  }
  cart.products = await sortDataForDate(cart.products);
  return cart;
};

export const updateCartStorageProducts = async (
  idUser,
  idProduct,
  quantity = 1
) => {
  let cart = await getCartStorageProducts(idUser);

  const [idProductExist] = cart.products.filter(
    (p) => p.idProduct === idProduct
  );

  if (idProductExist && idProductExist !== undefined) {
    cart.products = cart.products.filter((h) => h.idProduct !== idProduct);
    idProductExist.quantity += quantity;
    if (idProductExist.quantity > 0) {
      cart.products.push(idProductExist);
    }
  } else {
    cart.products.push({
      idProduct,
      quantity,
      date: new Date(),
    });
  }

  await AsyncStorage.setItem(idUser, JSON.stringify(cart));
};

export const deleteCartStorageProduct = async (idUser, idProduct) => {
  let cart = await getCartStorageProducts(idUser);
  cart.products = cart.products.filter((p) => p.idProduct !== idProduct);

  await AsyncStorage.setItem(idUser, JSON.stringify(cart));
};

export const deleteCartStorageProducts = async (idUser) => {
  let cart = await getCartStorageProducts(idUser);
  cart.products = [];

  await AsyncStorage.setItem(idUser, JSON.stringify(cart));
};
