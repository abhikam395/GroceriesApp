import axios from 'axios';
import baseUrl from './../config/baseUrl';

//add item to cart
export function addToCart(userId, productId) {
  return axios
    .post(`${baseUrl}/carts`, {
      userId: userId,
      productId: productId,
    })
    .then((res) => res.json);
}

//get cart items
export function getCartsItems(userId) {
  return axios.get(`${baseUrl}/users/${userId}/carts`);
}

//remove item from cart
export function removeItemCart(userId, productId) {
  return axios
    .delete(`${baseUrl}/carts`, {
      userId: userId,
      productId: productId,
    })
    .then((res) => res.json);
}
