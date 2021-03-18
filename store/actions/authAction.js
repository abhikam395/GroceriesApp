import {CLEAR, LOGIN, REGISTER} from '../types/authTypes';

export function login(data) {
  return {
    type: LOGIN,
    payload: data,
  };
}

export function register(data) {
  return {
    type: REGISTER,
    payload: data,
  };
}

export function clear() {
  return {
    type: CLEAR,
  };
}
