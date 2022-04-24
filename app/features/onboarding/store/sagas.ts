import {put, takeLatest} from 'redux-saga/effects';
import {
  failedResponse,
  ResponseGenerator,
  successResponse,
} from '../interfaces';
import {loginApi} from '../network/apis';
import {
  LOGIN_AUTH_ERROR,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from './actionTypes';
function* loginSaga(action: any) {
  const {payload = {}} = action;
  try {
    let result: ResponseGenerator = yield loginApi(payload);
    const {status}: any = result;
    if (successResponse.includes(status)) {
      payload.loginAt = new Date().toLocaleString();
      yield put({
        type: LOGIN_SUCCESS,
        loginRes: payload,
      });
    } else if (failedResponse.includes(status)) {
      yield put({
        type: LOGIN_FAILED,
      });
    }
  } catch (error) {
    console.log('error', error);
    yield put({
      type: LOGIN_AUTH_ERROR,
    });
  }
}
export function* watchloginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
