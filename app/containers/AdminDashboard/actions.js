/*
 *
 * AdminDashboard actions
 *
 */

import {
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  ADD_AGENT_REQUEST,
  ADD_AGNET_SUCCESS,
  ADD_AGENT_ERROR,
  UPDATE_AGENT_REQUEST,
  UPDATE_AGENT_SUCCESS,
  UPDATE_AGENT_ERROR,
  GET_AGENTS_REQUEST,
  GET_AGENTS_SUCCESS,
  GET_AGENTS_ERROR,
  UPLOAD_PICTURE_REQUEST,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_ERROR,
} from './constants';

/**
 * Get request for loggedin user details action
 * @author PravinKumar
 * @since 17 May 2018
 * @return {object}    An action object with a type of GET_USER_REQUEST
 */
export function getJobs() {
  return {
    type: GET_JOBS_REQUEST,
  };
}

/**
 * Get request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} data
 * @return {object}    An action object with a type of GET_USER_SUCCESS
 */
export function getJobsSuccess(data) {
  return {
    type: GET_JOBS_SUCCESS,
    data,
  };
}

/**
 * Get request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} error
 * @return {object}    An action object with a type of GET_USER_ERROR
 */
export function getJobsError(error) {
  return {
    type: GET_JOBS_ERROR,
    error,
  };
}
/**
 * add agent action
 * @author PravinKumar
 * @since 23 JUN 2018
 * @return {object}    An action object with a type of ADD_AGENT_REQUEST
 */
export function addAgent(data) {
  return {
    type: ADD_AGENT_REQUEST,
    data,
  };
}

/**
 * add agent action success
 * @author PravinKumar
 * @since 23 JUN 2018
 * @return {object}    An action object with a type of ADD_AGNET_SUCCESS
 */
export function addAgentSuccess(data) {
  return {
    type: ADD_AGNET_SUCCESS,
    data,
  };
}

/**
 * add agent action error
 * @author PravinKumar
 * @since 23 JUN 2018
 * @return {object}    An action object with a type of ADD_AGENT_ERROR
 */
export function addAgentError(error) {
  return {
    type: ADD_AGENT_ERROR,
    error,
  };
}

/**
 * update agent action
 * @author PravinKumar
 * @since 23 JUN 2018
 * @return {object}    An action object with a type of UPDATE_AGENT_REQUEST
 */
export function updateAgent(data, id) {
  return {
    type: UPDATE_AGENT_REQUEST,
    data,
    id,
  };
}

/**
 * update agent action success
 * @author PravinKumar
 * @since 23 JUN 2018
 * @return {object}    An action object with a type of UPDATE_AGENT_SUCCESS
 */
export function updateAgentSuccess(data) {
  return {
    type: UPDATE_AGENT_SUCCESS,
    data,
  };
}

/**
 * update agent action error
 * @author PravinKumar
 * @since 23 JUN 2018
 * @return {object}    An action object with a type of UPDATE_AGENT_ERROR
 */
export function updateAgentError(error) {
  return {
    type: UPDATE_AGENT_ERROR,
    error,
  };
}

/**
 * get agents action
 * @author PravinKumar
 * @since 23 JUN 2018
 * @return {object}    An action object with a type of GET_AGENTS_REQUEST
 */
export function getAgents(data) {
  return {
    type: GET_AGENTS_REQUEST,
    data,
  };
}

/**
 * get agents action success
 * @author PravinKumar
 * @since 23 JUN 2018
 * @return {object}    An action object with a type of GET_AGENTS_SUCCESS
 */
export function getAgentsSuccess(data) {
  return {
    type: GET_AGENTS_SUCCESS,
    data,
  };
}

/**
 * get agents action error
 * @author PravinKumar
 * @since 23 JUN 2018
 * @return {object}    An action object with a type of GET_AGENTS_ERROR
 */
export function getAgentsError(error) {
  return {
    type: GET_AGENTS_ERROR,
    error,
  };
}
/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} data
 * @return {object}    An action object with a type of UPDATE_PROFILE_PICTURE_REQUEST
 */
export function uploadPicture(data) {
  return {
    type: UPLOAD_PICTURE_REQUEST,
    data,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} data
 * @return {object}    An action object with a type of UPDATE_PROFILE_PICTURE_SUCCESS
 */
export function uploadPictureSuccess(data) {
  return {
    type: UPLOAD_PICTURE_SUCCESS,
    data,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} error
 * @return {object}    An action object with a type of UPDATE_PROFILE_PICTURE_ERROR
 */
export function uploadPictureError(error) {
  return {
    type: UPLOAD_PICTURE_ERROR,
    error,
  };
}
