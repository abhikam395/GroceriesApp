import {REMOVE_FROM_CART, ADD_TO_CART} from '../types/cartTypes';

export function remove() {
  return {
    type: REMOVE_FROM_CART,
  };
}

export function add(data) {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
}
