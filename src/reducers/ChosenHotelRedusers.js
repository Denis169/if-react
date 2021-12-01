import { handleActions } from 'redux-actions';
import { dataChosenHotelActionCreator, navigationChosenHotelActionCreator } from '../actionCreators';

const initialState = {
  dataChosenHotel: {
    city: '',
    country: '',
    id: '',
    imageUrl: '',
    name: '',
  },
  navigationChosenHotel: false,
};

const chosenHotelReducer = handleActions(
  {
    [dataChosenHotelActionCreator]: (state, { payload }) => ({ ...state, dataChosenHotel: payload }),
    [navigationChosenHotelActionCreator]: (state, { payload }) => ({ ...state, navigationChosenHotel: payload }),
  },
  initialState,
);

export default chosenHotelReducer;
