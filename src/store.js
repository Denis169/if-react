import { combineReducers, createStore } from 'redux';
import authorizationReducer from './reducers/authorizationRedusers';
import formReducer from './reducers/formRedusers';
import homesReducer from './reducers/homesRedusers';
import filtersReducer from './reducers/filtersRedusers';
import logoNavReducer from './reducers/logoNavRedusers';

const reducers = combineReducers({
  authorisation: authorizationReducer,
  form: formReducer,
  homes: homesReducer,
  filters: filtersReducer,
  logoNav: logoNavReducer,
});

const store = createStore(reducers);

export default store;
