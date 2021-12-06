import { handleActions } from 'redux-actions';
import {
  dataChosenHotelActionCreator,
  navigationChosenHotelActionCreator,
  requestChosenHotelActionCreator,
} from '../actionCreators';

const initialState = {
  dataChosenHotel: {
    city: '',
    country: '',
    id: '',
    imageUrl: '',
    name: '',
  },
  navigationChosenHotel: false,
  requestChosenHotel: '',
};

const chosenHotelReducer = handleActions(
  {
    [dataChosenHotelActionCreator]: (state, { payload }) => ({ ...state, dataChosenHotel: payload }),
    [navigationChosenHotelActionCreator]: (state, { payload }) => ({ ...state, navigationChosenHotel: payload }),
    [requestChosenHotelActionCreator]: (state, { payload }) => ({ ...state, requestChosenHotel: payload }),
  },
  initialState,
);

export default chosenHotelReducer;
