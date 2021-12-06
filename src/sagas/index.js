import { all, fork } from 'redux-saga/effects';

import watcherFetchAvailable from './availableSaga';
import watcherFetchHomes from './homesSaga';
import watcherAxiosChosen from './chosenHotelSaga';

function* rootSaga() {
  yield all([
    fork(watcherFetchAvailable),
    fork(watcherFetchHomes),
    fork(watcherAxiosChosen),
  ]);
}

export default rootSaga;
