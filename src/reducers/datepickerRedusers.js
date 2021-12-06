import { handleActions } from 'redux-actions';
import {
  dateEndDatepickerActionCreator,
  dateStartDatepickerActionCreator,
} from '../actionCreators';

const initialState = {
  dateStart: new Date(),
  dateEnd: new Date(),
};

const datepickerReducer = handleActions(
  {
    [dateStartDatepickerActionCreator]: (state, { payload }) => ({ ...state, dateStart: payload }),
    [dateEndDatepickerActionCreator]: (state, { payload }) => ({ ...state, dateEnd: payload }),
  },
  initialState,
);

export default datepickerReducer;
