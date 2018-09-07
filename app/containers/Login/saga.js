import { all, call, takeLatest, select, put } from 'redux-saga/effects';
import { FACEBOOK_LOGIN_REQUEST, LOGIN_REQUEST } from 'containers/App/constants';
import { loginSuccess, loginError, addUserToStoreSuccess } from 'containers/App/actions';
import request from 'utils/request';
import { history } from 'app';
import auth from 'utils/auth';
import { USER_TYPE, API_ENDPOINTS, AFTER_LOGIN_REDIRECT } from 'appConfig';
import { makeSelectEmail, makeSelectPassword, makeSelectFacebookData } from 'containers/Login/selectors';


/**
 * @description login the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* login() {
  // Select username from store
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const requestURL = `${API_ENDPOINTS.login}`;
  const requestParam = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      type: 'traveller',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const Response = yield call(request, requestURL, requestParam);
    if (Response.status === 200) {
      yield put(loginSuccess(Response));
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
      yield put(loginError(Response));
    }
  } catch (err) {
    yield put(loginError(err));
  }
}

/**
 * @description facebookLogin the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* facebookLogin() {
  // Select username from store
  const facebookData = yield select(makeSelectFacebookData());
  const requestURL = `${API_ENDPOINTS.register}`;
  const requestParam = {
    method: 'POST',
    body: JSON.stringify({
      fullName: facebookData.name,
      email: facebookData.email,
      facebookId: facebookData.facebookId,
      picture: facebookData.picture,
      facebookLogin: true,
      password: false,
      userType: 'traveller',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestParam);
    yield put(loginSuccess(Response));
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
  } catch (err) {
    yield put(loginError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(FACEBOOK_LOGIN_REQUEST, facebookLogin);
}

/**
 * Helper to handle navigation from sagas.
 * @param  {Sting} location The path to navigate
 */
function forwardTo(location) {
  history.replace(location);
}
