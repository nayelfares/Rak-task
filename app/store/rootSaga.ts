import {fork} from 'redux-saga/effects';
import {watchloginSaga} from '../features/onboarding/store/sagas';

function* rootSaga() {
  yield fork(watchloginSaga);
}

export default rootSaga;
