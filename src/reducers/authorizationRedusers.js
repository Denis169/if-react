import { handleActions } from 'redux-actions';

import { authorizationActionCreator, inputMailActionCreator, inputPasswordActionCreator } from '../actionCreators';

const initialState = {
  mail: '',
  password: '',
  authorization: false,
};

const authorizationReducer = handleActions(
  {
    [inputMailActionCreator]: (state, { payload }) => ({ ...state, mail: payload }),
    [inputPasswordActionCreator]: (state, { payload }) => ({ ...state, password: payload }),
    [authorizationActionCreator]: (state, { payload }) => ({ ...state, authorization: payload }),
  },
  initialState,
);

export default authorizationReducer;
