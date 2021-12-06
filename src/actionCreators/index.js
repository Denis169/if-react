import { createAction } from 'redux-actions';

import { INPUT_MAIL, INPUT_PASSWORD, AUTHORIZATION } from '../constants/autorizationConst';
import {
  ADD_AVAILABLE,
  AVAILABLE_DATA,
  ON_OF_ARROW,
  INPUT_SEARCH,
  SET_COUNT_AVAILABLE,
  REQUEST_FORM,
} from '../constants/formConst';
import { DATA_HOMES, COUNT_HOMES } from '../constants/homesConst';
import { SHOW_FILTERS, CURRENT_ADULTS, CURRENT_CHILDREN, CURRENT_ROOMS } from '../constants/filtersConst';
import COLOR_ACCOUNT from '../constants/logo-navConst';
import { DATA_CHOSEN_HOTEL, NAVIGATE_CHOSEN_HOTEL, REQUEST_CHOSEN_HOTEL } from '../constants/chosen-hotelConst';
import { DATE_START_DATEPICKER, DATE_END_DATEPICKER } from '../constants/datepickerConst';

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
export const requestFormActionCreator = createAction(REQUEST_FORM);

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
export const navigationChosenHotelActionCreator = createAction(NAVIGATE_CHOSEN_HOTEL);
export const requestChosenHotelActionCreator = createAction(REQUEST_CHOSEN_HOTEL);

// Datepicker

export const dateStartDatepickerActionCreator = createAction(DATE_START_DATEPICKER);
export const dateEndDatepickerActionCreator = createAction(DATE_END_DATEPICKER);
