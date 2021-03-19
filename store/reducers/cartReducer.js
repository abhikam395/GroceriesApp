import {ADD_TO_CART, REMOVE_FROM_CART} from './../types/cartTypes';

const initialState = {
  products: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let {product} = action.payload;
      state.products.push(product);
      return state;
    }
    case REMOVE_FROM_CART: {
      let {product} = action.payload;
      let products = state.products.filter((item) => item.id !== product.id);
      return {products: products};
    }
  }
  return state;
}
