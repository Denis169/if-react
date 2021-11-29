import { handleActions } from 'redux-actions';

import { colorAccountActionCreator } from '../actionCreators';

const initialState = {
  colorAccount: false,
};

const logoNavReducer = handleActions(
  {
    [colorAccountActionCreator]: (state, { payload }) => ({ ...state, colorAccount: payload }),
  },
  initialState,
);

export default logoNavReducer;
