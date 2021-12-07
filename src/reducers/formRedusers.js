import { handleActions } from 'redux-actions';

import {
  addAvailableActionCreator,
  availableDataActionCreator,
  classArrowActionCreator,
  inputSearchActionCreator, requestFormActionCreator,
  setCountAvailableActionCreator,
} from '../actionCreators';

const initialState = {
  search: '',
  available: false,
  availableData: [],
  countAvailable: 0,
  classArrow: '',
  requestForm: '',
};

const formReducer = handleActions(
  {
    [inputSearchActionCreator]: (state, { payload }) => ({ ...state, search: payload }),
    [addAvailableActionCreator]: (state, { payload }) => ({ ...state, available: payload }),
    [availableDataActionCreator]: (state, { payload }) => ({ ...state, availableData: payload }),
    [setCountAvailableActionCreator]: (state, { payload }) => ({ ...state, countAvailable: payload }),
    [classArrowActionCreator]: (state, { payload }) => ({ ...state, classArrow: payload }),
    [requestFormActionCreator]: (state, { payload }) => ({ ...state, requestForm: payload }),
  },
  initialState,
);

export default formReducer;
