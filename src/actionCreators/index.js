import { createAction } from 'redux-actions';

import { INPUT_MAIL, INPUT_PASSWORD, AUTHORIZATION } from '../constants/autorizationConst';
import { ADD_AVAILABLE, AVAILABLE_DATA, ON_OF_ARROW, INPUT_SEARCH, SET_COUNT_AVAILABLE } from '../constants/formConst';
import { DATA_HOMES, COUNT_HOMES } from '../constants/homesConst';
import { SHOW_FILTERS, CURRENT_ADULTS, CURRENT_CHILDREN, CURRENT_ROOMS } from '../constants/filtersConst';
import COLOR_ACCOUNT from '../constants/logo-navConst';
import DATA_CHOSEN_HOTEL from '../constants/chosen-hotelConst';

// Authorization

export const inputMailActionCreator = createAction(INPUT_MAIL);
export const inputPasswordActionCreator = createAction(INPUT_PASSWORD);
export const authorizationActionCreator = createAction(AUTHORIZATION);

// Form

export const inputSearchActionCreator = createAction(INPUT_SEARCH);
export const addAvailableActionCreator = createAction(ADD_AVAILABLE);
export const availableDataActionCreator = createAction(AVAILABLE_DATA);
export const setCountAvailableActionCreator = createAction(SET_COUNT_AVAILABLE);
export const classArrowActionCreator = createAction(ON_OF_ARROW);

// Homes

export const dataHomesActionCreator = createAction(DATA_HOMES);
export const countHomesActionCreator = createAction(COUNT_HOMES);

// Filters

export const showFiltersActionCreator = createAction(SHOW_FILTERS);
export const currentAdultsActionCreator = createAction(CURRENT_ADULTS);
export const currentChildrenActionCreator = createAction(CURRENT_CHILDREN);
export const currentRoomsActionCreator = createAction(CURRENT_ROOMS);

// Logo-nav

export const colorAccountActionCreator = createAction(COLOR_ACCOUNT);

// Chosen-Hotel

export const dataChosenHotelActionCreator = createAction(DATA_CHOSEN_HOTEL);