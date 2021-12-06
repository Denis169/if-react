import { call, put, takeLatest } from 'redux-saga/effects';

import { urlChose } from '../constants/urls';
import { dataChosenHotelActionCreator } from '../actionCreators';
import { REQUEST_CHOSEN_HOTEL } from '../constants/chosen-hotelConst';

function* axiosChosen({ payload }) {
  try {
    const place = yield call(() => fetch(urlChose + payload));
    const jsonPlace = yield call(() => new Promise((res) => res(place.json())));
    yield put(dataChosenHotelActionCreator(jsonPlace));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watcherAxiosChosen() {
  yield takeLatest(REQUEST_CHOSEN_HOTEL, axiosChosen);
}

export default watcherAxiosChosen;
