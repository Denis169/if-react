import { call, put, takeLatest } from 'redux-saga/effects';

import { urlHomes } from '../constants/urls';
import { dataHomesActionCreator } from '../actionCreators';
import { AUTHORIZATION } from '../constants/autorizationConst';

function* fetchHomes() {
  try {
    const user = yield call(() => fetch(urlHomes));
    const json = yield call(() => new Promise((res) => res(user.json())));
    yield put(dataHomesActionCreator(json));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watcherFetchHomes() {
  yield takeLatest(AUTHORIZATION, fetchHomes);
}

export default watcherFetchHomes;
