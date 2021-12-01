import { handleActions } from 'redux-actions';

import {
  currentAdultsActionCreator,
  currentChildrenActionCreator,
  currentRoomsActionCreator,
  showFiltersActionCreator,
} from '../actionCreators';

const initialState = {
  showFilters: false,
  currentAdults: 2,
  currentChildren: 0,
  currentRooms: 1,
};

const filtersReducer = handleActions(
  {
    [showFiltersActionCreator]: (state, { payload }) => ({ ...state, showFilters: payload }),
    [currentAdultsActionCreator]: (state, { payload }) => ({ ...state, currentAdults: payload }),
    [currentChildrenActionCreator]: (state, { payload }) => ({ ...state, currentChildren: payload }),
    [currentRoomsActionCreator]: (state, { payload }) => ({ ...state, currentRooms: payload }),
  },
  initialState,
);

export default filtersReducer;
