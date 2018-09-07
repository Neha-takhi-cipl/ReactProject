import { call, takeLatest, put } from 'redux-saga/effects';
import {
  ADD_USER_TO_STORE,
  INVITED_TRIP,
  GET_USER_REQUEST,
  TRIP_BY_URL,
} from 'containers/App/constants';
import {
  addUserToStoreSuccess,
  addUserToStoreError,
  invitedTripSuccess,
  invitedTripError,
  getUserDataSuccess,
  getUserDataError,
  tripByUrlSuccess,
  tripByUrlError,
} from 'containers/App/actions';
import auth from 'utils/auth';
import request from 'utils/request';
import { API_ENDPOINTS } from 'appConfig';
// import { makeSelectEmail, makeSelectPassword, makeSelectFacebookData } from 'containers/Login/selectors';


/**
 * @description facebookLogin the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* addUsertoStore(action) {
  try {
    yield put(addUserToStoreSuccess(action.data));
  } catch (err) {
    yield put(addUserToStoreError(err));
  }
}

/**
 * @description Invite Trip the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* inviteTrip(action) {
  try {
    yield put(invitedTripSuccess(action.data));
  } catch (err) {
    yield put(invitedTripError(err));
  }
}
/**
 * @description  Trip by url  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* tripByUrl(action) {
  try {
    yield put(tripByUrlSuccess(action.data));
  } catch (err) {
    yield put(tripByUrlError(err));
  }
}
/**
 * @description SignUp the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* getUser() {
  const requestURL = `${API_ENDPOINTS.getUserProfile}`;
  const requestParam = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    const response = yield call(request, requestURL, requestParam);
    yield put(getUserDataSuccess(response));
  } catch (err) {
    yield put(getUserDataError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(ADD_USER_TO_STORE, addUsertoStore);
  yield takeLatest(INVITED_TRIP, inviteTrip);
  yield takeLatest(TRIP_BY_URL, tripByUrl);
  yield takeLatest(GET_USER_REQUEST, getUser);
}
