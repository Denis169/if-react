import { handleActions } from 'redux-actions';
import { dataChosenHotelActionCreator } from '../actionCreators';

const initialState = {
  dataChosenHotel: {
    city: '',
    country: '',
    id: '',
    imageUrl: '',
    name: '',
  },
};

const chosenHotelReducer = handleActions(
  {
    [dataChosenHotelActionCreator]: (state, { payload }) => ({ ...state, dataChosenHotel: payload }),
  },
  initialState,
);

export default chosenHotelReducer;
