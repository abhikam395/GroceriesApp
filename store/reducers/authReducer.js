import {REGISTER, LOGIN, USER, TOKEN, CLEAR} from './../types/authTypes';
import DefaultPreference from 'react-native-default-preference';

const initialState = {
  user: null,
  token: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      let {user, token} = action.payload;
      DefaultPreference.set(TOKEN, token);
      DefaultPreference.set(USER, user);
      return Object.assign({...state}, {...action.payload});
    }
    case REGISTER: {
      let {user, token} = action.payload;
      DefaultPreference.set(TOKEN, token);
      DefaultPreference.set(USER, user);
      return Object.assign({...state}, {...action.payload});
    }
    case CLEAR: {
      DefaultPreference.clear(TOKEN);
      DefaultPreference.clear(USER);
      return {};
    }
  }
  return state;
}
