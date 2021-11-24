import {
  ARROW_LEFT_HOMES,
  ARROW_RIGHT_HOMES, COUNT_HOMES, DATA_HOMES,
} from '../constants';

const initialState = {
  arrowRight: true,
  arrowLeft: false,
  data: [],
  countHomes: 0,
};

function homesReducer(state = initialState, action) {
  switch (action.type) {
    case ARROW_RIGHT_HOMES:
      return { ...state, arrowRight: action.payload };
    case ARROW_LEFT_HOMES:
      return { ...state, arrowLeft: action.payload };
    case DATA_HOMES:
      return { ...state, data: action.payload };
    case COUNT_HOMES:
      return { ...state, countHomes: action.payload };
    default:
      return state;
  }
}

export default homesReducer;
