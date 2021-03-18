import {ADD_EXCLUSIVE_OFFERS} from './../types/productTypes';

export function addExclusiveOffers(products) {
  return {
    type: ADD_EXCLUSIVE_OFFERS,
    payload: products,
  };
}
