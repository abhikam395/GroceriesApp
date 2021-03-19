import {createStore, combineReducers} from 'redux';
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';
import offersProductReducer from './reducers/offersProductReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  offersProductReducer: offersProductReducer,
  cartReducer: cartReducer,
});

export default createStore(rootReducer);
