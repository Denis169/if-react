import { handleActions } from 'redux-actions';

import { countHomesActionCreator, dataHomesActionCreator } from '../actionCreators';

const initialState = {
  data: [{
    city: '',
    country: '',
    id: '',
    imageUrl: '',
    name: '',
  }],
  countHomes: 0,
};

const homesReducer = handleActions(
  {
    [dataHomesActionCreator]: (state, { payload }) => ({ ...state, data: payload }),
    [countHomesActionCreator]: (state, { payload }) => ({ ...state, countHomes: payload }),
  },
  initialState,
);

export default homesReducer;
