import { handleActions } from 'redux-actions';

import { colorAccountActionCreator, themeActionCreator } from '../actionCreators';

const initialState = {
  colorAccount: false,
  theme: true,
};

const logoNavReducer = handleActions(
  {
    [colorAccountActionCreator]: (state, { payload }) => ({ ...state, colorAccount: payload }),
    [themeActionCreator]: (state, { payload }) => ({ ...state, theme: payload }),
  },
  initialState,
);

export default logoNavReducer;
