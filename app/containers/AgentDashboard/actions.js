/*
 *
 * AgentDashboard actions
 *
 */

import {
  GET_NEW_JOBS_REQUEST,
  GET_NEW_JOBS_SUCCESS,
  GET_NEW_JOBS_ERROR,
  ASSIGN_JOBS_REQUEST,
  ASSIGN_JOBS_SUCCESS,
  ASSIGN_JOBS_ERROR,
} from './constants';

/**
 * Get request for loggedin user details action
 * @author PravinKumar
 * @since 17 May 2018
 * @return {object}    An action object with a type of GET_USER_REQUEST
 */
export function getNewJobs() {
  return {
    type: GET_NEW_JOBS_REQUEST,
  };
}

/**
 * Get request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} data
 * @return {object}    An action object with a type of GET_USER_SUCCESS
 */
export function getNewJobsSuccess(data) {
  return {
    type: GET_NEW_JOBS_SUCCESS,
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
export function getNewJobsError(error) {
  return {
    type: GET_NEW_JOBS_ERROR,
    error,
  };
}

/**
 * assign Job To Me action
 * @author PravinKumar
 * @since 13 JUN 2018
 * @return {object}    An action object with a type of ASSIGN_JOBS_REQUEST
 */
export function assignJobToMe(data) {
  return {
    type: ASSIGN_JOBS_REQUEST,
    data,
  };
}

/**
 * assign Job To Me action success
 * @author PravinKumar
 * @since 13 JUN 2018
 * @return {object}    An action object with a type of ASSIGN_JOBS_SUCCESS
 */
export function assignJobToMeSuccess(data) {
  return {
    type: ASSIGN_JOBS_SUCCESS,
    data,
  };
}

/**
 * assign Job To Me action error
 * @author PravinKumar
 * @since 13 JUN 2018
 * @return {object}    An action object with a type of ASSIGN_JOBS_REQUEST
 */
export function assignJobToMeError(data) {
  return {
    type: ASSIGN_JOBS_ERROR,
    data,
  };
}

