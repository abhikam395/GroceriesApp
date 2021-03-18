import {ADD_EXCLUSIVE_OFFERS} from '../types/productTypes';

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_EXCLUSIVE_OFFERS: {
      return Object.assign({...state}, {products: action.payload});
    }
  }
  return state;
}
