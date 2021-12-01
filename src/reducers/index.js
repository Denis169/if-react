import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authorizationReducer from './authorizationRedusers';
import formReducer from './formRedusers';
import homesReducer from './homesRedusers';
import filtersReducer from './filtersRedusers';
import logoNavReducer from './logoNavRedusers';
import chosenHotelReducer from './ChosenHotelRedusers';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['authorisation', 'homes', 'form', 'chosenHotel'],
};

const reducers = combineReducers({
  chosenHotel: chosenHotelReducer,
  authorisation: authorizationReducer,
  form: formReducer,
  homes: homesReducer,
  filters: filtersReducer,
  logoNav: logoNavReducer,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export default persistedReducers;
