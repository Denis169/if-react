import { call, put, takeLatest } from 'redux-saga/effects';

import { urlAvailable } from '../constants/urls';
import { availableDataActionCreator, classArrowActionCreator, setCountAvailableActionCreator } from '../actionCreators';
import { REQUEST_FORM } from '../constants/formConst';

function* fetchAvailable({ payload }) {
  try {
    const user = yield call(() => fetch(urlAvailable + payload));
    const json = yield call(() => new Promise((res) => res(user.json())));
    yield put(availableDataActionCreator(json));
    yield put(setCountAvailableActionCreator(0));
    yield json.length < 5 && put(classArrowActionCreator('homes__display-none'));
    yield json.length > 4 && put(classArrowActionCreator(''));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watcherFetchAvailable() {
  yield takeLatest(REQUEST_FORM, fetchAvailable);
}

export default watcherFetchAvailable;
