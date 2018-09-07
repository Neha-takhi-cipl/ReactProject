import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { API_ENDPOINTS } from 'appConfig';
import auth from 'utils/auth';
import {
  GET_NEW_JOBS_REQUEST,
  ASSIGN_JOBS_REQUEST,
} from './constants';
import {
  getNewJobsSuccess,
  getNewJobsError,
  assignJobToMeSuccess,
  assignJobToMeError,
} from './actions';

/**
 * @description get New Jobs  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* getNewJobs() {
  const requestURL = `${API_ENDPOINTS.agentJob}`;
  const requestParam = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    const response = yield call(request, requestURL, requestParam);
    yield put(getNewJobsSuccess(response));
  } catch (err) {
    yield put(getNewJobsError(err));
  }
}

/**
 * @description assignJob to agent request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* assignJobToMe(action) {
  const jobId = action.data;
  const requestURL = `${API_ENDPOINTS.assignJob}/${jobId}`;
  const requestParam = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    const response = yield call(request, requestURL, requestParam);
    yield put(assignJobToMeSuccess(response));
  } catch (err) {
    yield put(assignJobToMeError(err));
  }
}

/**
 * @description Root saga manages watcher lifecycle
 * @author PravinKumar
 * @since 17 May 2018
 */

export default function* Watcher() {
  yield takeLatest(GET_NEW_JOBS_REQUEST, getNewJobs);
  yield takeLatest(ASSIGN_JOBS_REQUEST, assignJobToMe);
}
