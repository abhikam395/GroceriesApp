import {createStore, combineReducers} from 'redux';
import authReducer from './reducers/authReducer';
import offersProductReducer from './reducers/offersProductReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  offersProductReducer: offersProductReducer,
});

export default createStore(rootReducer);
