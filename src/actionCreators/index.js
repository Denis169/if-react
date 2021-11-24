import {
  ADD_AVAILABLE,
  AUTHORIZATION,
  AVAILABLE_DATA,
  ON_OF_ARROW,
  DECREMENT_COUNT_AVAILABLE,
  INCREMENT_COUNT_AVAILABLE,
  INPUT_MAIL,
  INPUT_PASSWORD,
  INPUT_SEARCH,
  SET_COUNT_AVAILABLE,
  ARROW_RIGHT_HOMES,
  ARROW_LEFT_HOMES,
  SHOW_FILTERS,
  CURRENT_ADULTS,
  CURRENT_CHILDREN,
  CURRENT_ROOMS, COLOR_ACCOUNT, DATA_HOMES, COUNT_HOMES,
} from '../constants';

// Authorization

export const inputMailActionCreator = (payload) => ({
  type: INPUT_MAIL,
  payload,
});

export const inputPasswordActionCreator = (payload) => ({
  type: INPUT_PASSWORD,
  payload,
});

export const authorizationActionCreator = (payload) => ({
  type: AUTHORIZATION,
  payload,
});

// Form

export const inputSearchActionCreator = (payload) => ({
  type: INPUT_SEARCH,
  payload,
});

export const addAvailableActionCreator = (payload) => ({
  type: ADD_AVAILABLE,
  payload,
});

export const availableDataActionCreator = (payload) => ({
  type: AVAILABLE_DATA,
  payload,
});

export const incrementCountAvailableActionCreator = (payload) => ({
  type: INCREMENT_COUNT_AVAILABLE,
  payload,
});

export const decrementCountAvailableActionCreator = (payload) => ({
  type: DECREMENT_COUNT_AVAILABLE,
  payload,
});

export const setCountAvailableActionCreator = (payload) => ({
  type: SET_COUNT_AVAILABLE,
  payload,
});

export const classArrowActionCreator = (payload) => ({
  type: ON_OF_ARROW,
  payload,
});

// Homes

export const arrowRightActionCreator = (payload) => ({
  type: ARROW_RIGHT_HOMES,
  payload,
});

export const arrowLeftActionCreator = (payload) => ({
  type: ARROW_LEFT_HOMES,
  payload,
});

export const dataHomesActionCreator = (payload) => ({
  type: DATA_HOMES,
  payload,
});

export const countHomesActionCreator = (payload) => ({
  type: COUNT_HOMES,
  payload,
});

// Filters

export const showFiltersActionCreator = (payload) => ({
  type: SHOW_FILTERS,
  payload,
});

export const currentAdultsActionCreator = (payload) => ({
  type: CURRENT_ADULTS,
  payload,
});

export const currentChildrenActionCreator = (payload) => ({
  type: CURRENT_CHILDREN,
  payload,
});

export const currentRoomsActionCreator = (payload) => ({
  type: CURRENT_ROOMS,
  payload,
});

// Logo-nav

export const colorAccountActionCreator = (payload) => ({
  type: COLOR_ACCOUNT,
  payload,
});
