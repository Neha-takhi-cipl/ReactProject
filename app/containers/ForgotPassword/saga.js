import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { API_ENDPOINTS } from 'appConfig';
import { FORGOT_PASSWORD_REQUEST } from './constants';
import { makeSelectEmail } from './selectors';
import { forgetPasswordSuccess, forgetPasswordError } from './actions';

/**
 * @description forgetPassword the user  request/response handler
 * @author PravinKumar
 * @since 18 May 2018
 */
export function* forgetPassword() {
  // Select username from store
  const email = yield select(makeSelectEmail());
  const requestURL = `${API_ENDPOINTS.forgotPassword}`;
  const requestParam = {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestParam);
    if (Response.status === 200) {
      yield put(forgetPasswordSuccess(Response));
    } else {
      yield put(forgetPasswordError(Response));
    }
  } catch (err) {
    yield put(forgetPasswordError(err));
  }
}

/**
 * @description SignUp the user  request/response handler
 * @author PravinKumar
 * @since 18 May 2018
 */
export default function* defaultSaga() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgetPassword);
}
