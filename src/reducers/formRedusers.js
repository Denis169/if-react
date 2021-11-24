import {
  ADD_AVAILABLE,
  AVAILABLE_DATA,
  SET_COUNT_AVAILABLE,
  DECREMENT_COUNT_AVAILABLE,
  INCREMENT_COUNT_AVAILABLE,
  INPUT_SEARCH,
  ON_OF_ARROW,
} from '../constants';

const initialState = {
  search: '',
  available: false,
  availableData: [],
  countAvailable: 0,
  classArrow: '',
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_SEARCH:
      return { ...state, search: action.payload };
    case ADD_AVAILABLE:
      return { ...state, available: action.payload };
    case AVAILABLE_DATA:
      return { ...state, availableData: action.payload };
    case INCREMENT_COUNT_AVAILABLE:
      return { ...state, countAvailable: state.countAvailable + 1 };
    case DECREMENT_COUNT_AVAILABLE:
      return { ...state, countAvailable: state.countAvailable - 1 };
    case SET_COUNT_AVAILABLE:
      return { ...state, countAvailable: action.payload };
    case ON_OF_ARROW:
      return { ...state, classArrow: action.payload };
    default:
      return state;
  }
}

export default formReducer;
