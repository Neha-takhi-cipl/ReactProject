import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from 'containers/App/constants';
import { loginSuccess, loginError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectEmail, makeSelectPassword } from 'containers/AgentLogin/selectors';
import { BASE_URL } from '../../appConfig';

/**
 * @description login the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* login() {
  // Select username from store
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const requestURL = `${BASE_URL}api/login`;
  const requestParam = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      type: 'agent',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const loginResponse = yield call(request, requestURL, requestParam);
    if (loginResponse.status === 200) {
      yield put(loginSuccess(loginResponse));
    } else {
      yield put(loginError(loginResponse));
    }
  } catch (err) {
    yield put(loginError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
