import { handleActions } from 'redux-actions';

import { countHomesActionCreator, dataHomesActionCreator } from '../actionCreators';

const initialState = {
  dataHomes: [],
  countHomes: 0,
};

const homesReducer = handleActions(
  {
    [dataHomesActionCreator]: (state, { payload }) => ({ ...state, dataHomes: payload }),
    [countHomesActionCreator]: (state, { payload }) => ({ ...state, countHomes: payload }),
  },
  initialState,
);

export default homesReducer;
