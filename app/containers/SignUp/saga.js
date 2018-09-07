/**
 * SignUp saga call api for signup container
 *
 */

import { all, call, takeLatest, select, put } from 'redux-saga/effects';
import { SIGNUP_REQUEST } from 'containers/App/constants';
import { FACEBOOK_SIGNUP } from 'containers/SignUp/constants';
import { signupSuccess, signupError, addUserToStoreSuccess } from 'containers/App/actions';
import request from 'utils/request';
import { history } from 'app';
import auth from 'utils/auth';
import { USER_TYPE, API_ENDPOINTS, AFTER_LOGIN_REDIRECT } from 'appConfig';
import { makeSelectFullname, makeSelectEmail, makeSelectPassword, makeSelectFacebooksignup } from 'containers/SignUp/selectors';

/**
 * @description SignUp the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* signUp() {
  // Select username from store
  const fullname = yield select(makeSelectFullname());
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const requestURL = `${API_ENDPOINTS.register}`;
  const requestParam = {
    method: 'POST',
    body: JSON.stringify({
      fullName: fullname,
      email,
      password,
      facebookLogin: false,
      userType: USER_TYPE.traveller,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestParam);
    if (Response.status === 201) {
      yield put(signupSuccess(Response));
      yield put(addUserToStoreSuccess(Response));

      yield all([
        call(auth.setToken, Response.data.token, true),
        call(auth.setUserInfo, Response.data, true),
      ]);
      if (Response.data.userType === USER_TYPE.traveller) {
        yield call(forwardTo, AFTER_LOGIN_REDIRECT.traveller);
      } else if (Response.data.userType === USER_TYPE.agent) {
        yield call(forwardTo, AFTER_LOGIN_REDIRECT.agent);
      } else if (Response.data.userType === USER_TYPE.admin) {
        yield call(forwardTo, AFTER_LOGIN_REDIRECT.admin);
      }
    } else {
      yield put(signupSuccess(Response));
      yield put(addUserToStoreSuccess(Response));
    }
  } catch (err) {
    yield put(signupError(err));
  }
}

/**
 * @description SignUp the user  request/response handler
 * @author PravinKumar
 * @since 18 May 2018
 */
export function* facebooSignup() {
  // Select username from store
  const facebooksignup = yield select(makeSelectFacebooksignup());
  const requestURL = `${API_ENDPOINTS.register}`;
  const requestParam = {
    method: 'POST',
    body: JSON.stringify({
      fullName: facebooksignup.name,
      email: facebooksignup.email,
      facebookId: facebooksignup.facebookId,
      picture: facebooksignup.picture,
      facebookLogin: true,
      password: false,
      userType: USER_TYPE.traveller,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestParam);
    if (Response.status === 201 || Response.status === 422) {
      yield put(signupSuccess(Response));
      yield put(addUserToStoreSuccess(Response));

      yield all([
        call(auth.setToken, Response.data.token, true),
        call(auth.setUserInfo, Response.data, true),
      ]);
      if (Response.data.userType === USER_TYPE.traveller) {
        yield call(forwardTo, AFTER_LOGIN_REDIRECT.traveller);
      } else if (Response.data.userType === USER_TYPE.agent) {
        yield call(forwardTo, AFTER_LOGIN_REDIRECT.agent);
      } else if (Response.data.userType === USER_TYPE.admin) {
        yield call(forwardTo, AFTER_LOGIN_REDIRECT.admin);
      }
    } else {
      yield put(signupError(Response));
    }
  } catch (err) {
    yield put(signupError(err));
  }
}

/**
 * @description Root saga manages watcher lifecycle
 * @author PravinKumar
 * @since 17 May 2018
 */

export default function* signUpWatcher() {
  // Watches for SIGNUP_REQUEST actions and calls signup when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SIGNUP_REQUEST, signUp);
  yield takeLatest(FACEBOOK_SIGNUP, facebooSignup);
}

/**
 * Helper to handle navigation from sagas.
 * @param  {Sting} location The path to navigate
 */
function forwardTo(location) {
  history.replace(location);
}
