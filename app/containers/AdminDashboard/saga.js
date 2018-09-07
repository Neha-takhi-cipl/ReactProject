import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { API_ENDPOINTS } from 'appConfig';
import auth from 'utils/auth';
import {
  GET_JOBS_REQUEST,
  ADD_AGENT_REQUEST,
  UPDATE_AGENT_REQUEST,
  GET_AGENTS_REQUEST,
  UPLOAD_PICTURE_REQUEST,
} from './constants';
import {
  getJobsSuccess,
  getJobsError,
  addAgentSuccess,
  addAgentError,
  updateAgentError,
  updateAgentSuccess,
  getAgentsSuccess,
  getAgentsError,
  uploadPictureSuccess,
  uploadPictureError,
} from './actions';

/**
 * @description SignUp the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* getJobs() {
  const requestURL = `${API_ENDPOINTS.adminJobs}`;
  const requestParam = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    const response = yield call(request, requestURL, requestParam);
    yield put(getJobsSuccess(response));
  } catch (err) {
    yield put(getJobsError(err));
  }
}

/**
 * @description Create a new agent request/response handler
 * @author PravinKumar
 * @since 23 Jun 2018
 */
export function* addAgent(action) {
  const requestURL = `${API_ENDPOINTS.agentRegister}`;
  const requestParam = {
    method: 'POST',
    body: JSON.stringify(action.data),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    const response = yield call(request, requestURL, requestParam);
    yield put(addAgentSuccess(response));
  } catch (err) {
    yield put(addAgentError(err));
  }
}

/**
 * @description Update Agent request/response handler
 * @author PravinKumar
 * @since 23 Jun 2018
 */
export function* updateAgent(action) {
  const requestData = action.data;
  const requestURL = `${API_ENDPOINTS.updateAgent}/${action.id}`;
  if (!(!requestData.password && requestData.password !== '')) {
    delete requestData.password;
  }
  const requestParam = {
    method: 'PUT',
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    const response = yield call(request, requestURL, requestParam);
    yield put(updateAgentSuccess(response));
  } catch (err) {
    yield put(updateAgentError(err));
  }
}

/**
 * @description get agent listings request/response handler
 * @author PravinKumar
 * @since 23 Jun 2018
 */
export function* getAgents() {
  const requestURL = `${API_ENDPOINTS.getAgents}`;
  const requestParam = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    const response = yield call(request, requestURL, requestParam);
    yield put(getAgentsSuccess(response));
  } catch (err) {
    yield put(getAgentsError(err));
  }
}

/**
 * @description upload Picture  request/response handler
 * @author PravinKumar
 * @since 23 Jun 2018
 */
export function* uploadPicture(action) {
  const requestURL = `${API_ENDPOINTS.uploadPicture}`;
  const fd = new FormData();
  fd.append('picture', action.data);
  const requestParam = {
    method: 'POST',
    headers: {
      'x-access-token': auth.get('jwtToken'),
    },
    body: fd,
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, requestParam);
    yield put(uploadPictureSuccess(response));
  } catch (err) {
    yield put(uploadPictureError(err));
  }
}

/**
 * @description Root saga manages watcher lifecycle
 * @author PravinKumar
 * @since 17 May 2018
 */

export default function* Watcher() {
  yield takeLatest(GET_JOBS_REQUEST, getJobs);
  yield takeLatest(ADD_AGENT_REQUEST, addAgent);
  yield takeLatest(UPDATE_AGENT_REQUEST, updateAgent);
  yield takeLatest(GET_AGENTS_REQUEST, getAgents);
  yield takeLatest(UPLOAD_PICTURE_REQUEST, uploadPicture);
}
