import {
  CURRENT_ADULTS,
  CURRENT_CHILDREN,
  CURRENT_ROOMS,
  SHOW_FILTERS,
} from '../constants';

const initialState = {
  showFilters: false,
  currentAdults: 2,
  currentChildren: 0,
  currentRooms: 1,
};

function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_FILTERS:
      return { ...state, showFilters: action.payload };
    case CURRENT_ADULTS:
      return { ...state, currentAdults: action.payload };
    case CURRENT_CHILDREN:
      return { ...state, currentChildren: action.payload };
    case CURRENT_ROOMS:
      return { ...state, currentRooms: action.payload };
    default:
      return state;
  }
}

export default filtersReducer;
