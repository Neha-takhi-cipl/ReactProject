/**
 * @description App Container Actions change things in your application
 * @author PravinKumar
 * @since 17 May 2018
 *
 */

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  FACEBOOK_LOGIN_REQUEST,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  PLANNED_TYPE_CHANGE,
  GUEST_JOB_DATA_STEP_ONE,
  GUEST_JOB_DATA_STEP_TWO,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  CLOSE_TUTORIAL_REQUEST,
  CLOSE_TUTORIAL_SUCCESS,
  CLOSE_TUTORIAL_ERROR,
  ADD_USER_TO_STORE,
  ADD_USER_TO_STORE_SUCCESS,
  ADD_USER_TO_STORE_ERROR,
  INVITED_TRIP,
  INVITED_TRIP_SUCCESS,
  INVITED_TRIP_ERROR,
  TRIP_BY_URL,
  TRIP_BY_URL_SUCCESS,
  TRIP_BY_URL_ERROR,
} from './constants';

/**
 * @description Create an user request as Signup, this action starts the request saga
 * @author PravinKumar
 * @since 17 May 2018
 * @return {object} An action object with a type of SIGNUP_REQUEST
 */
export function signupRequest() {
  return {
    type: SIGNUP_REQUEST,
  };
}

/**
 * @description Dispatched when the Signup success by the request saga
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of SIGNUP_SUCCESS passing the repos
 */
export function signupSuccess(signUpResponse) {
  return {
    type: SIGNUP_SUCCESS,
    signUpResponse,
  };
}

/**
 * @description Dispatched when signup of user fails
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of SIGNUP_ERROR passing the error
 */
export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    error,
  };
}

/**
 * @description Login action
 * @author PravinKumar
 * @since 22 May 2018
 *
 * @return {object}    An action object with a type of LOGIN_REQUEST
 */
export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

/**
 * @description Login action
 * @author PravinKumar
 * @since 22 May 2018
 *
 * @return {object}    An action object with a type of FACEBOOK_LOGIN_REQUEST
 */
export function facebookLoginRequest() {
  return {
    type: FACEBOOK_LOGIN_REQUEST,
  };
}

/**
 * @description Login action
 * @author PravinKumar
 * @since 22 May 2018
 * @param  {object} loginResponse, reeponse of email login or facebook signup/login.
 *
 * @return {object}    An action object with a type of LOGIN_SUCCESS
 */
export function loginSuccess(loginResponse) {
  return {
    type: LOGIN_SUCCESS,
    loginResponse,
  };
}

/**
 * @description Login error action
 * @author PravinKumar
 * @since 22 May 2018
 * @param  {string/object} error The error
 *
 * @return {object}    An action object with a type of LOGIN_ERROR
 */
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

/**
 * @description guestJobDataOne  action
 * @author PravinKumar
 * @since 22 May 2018
 * @param  {string/object} data data added by user
 *
 * @return {object}    An action object with a type of GUEST_JOB_DATA_STEP_ONE
 */
export function guestJobDataOne(data) {
  return {
    type: GUEST_JOB_DATA_STEP_ONE,
    data,
  };
}
/**
* @description guestJobDataTwo  action
* @author PravinKumar
* @since 22 May 2018
* @param  {string/object} data data added by user
*
* @return {object}    An action object with a type of GUEST_JOB_DATA_STEP_TWO
*/
export function guestJobDataTwo(data) {
  return {
    type: GUEST_JOB_DATA_STEP_TWO,
    data,
  };
}

/**
* @description tripPlanTypeChange  action
* @author PravinKumar
* @since 22 May 2018
* @param  {bool} data data added by user
*
* @return {object}    An action object with a type of PLANNED_TYPE_CHANGE
*/
export function tripPlanTypeChange(data) {
  return {
    type: PLANNED_TYPE_CHANGE,
    data,
  };
}
/**
 * Get request for loggedin user details action
 * @author PravinKumar
 * @since 17 May 2018
 * @return {object}    An action object with a type of GET_USER_REQUEST
 */
export function getUserData() {
  return {
    type: GET_USER_REQUEST,
  };
}

/**
 * Get request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} data
 * @return {object}    An action object with a type of GET_USER_SUCCESS
 */
export function getUserDataSuccess(data) {
  return {
    type: GET_USER_SUCCESS,
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
export function getUserDataError(error) {
  return {
    type: GET_USER_ERROR,
    error,
  };
}

/**
 * Get trip itinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @return {object}    An action object with a type of GET_ITINERARIES_REQUEST
 */
export function closeTutorial(data) {
  return {
    type: CLOSE_TUTORIAL_REQUEST,
    data,
  };
}

/**
 * Get trip itinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of GET_ITINERARIES_SUCCESS
 */
export function closeTutorialSuccess(data) {
  return {
    type: CLOSE_TUTORIAL_SUCCESS,
    data,
  };
}

/**
 * Get trip itinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of GET_ITINERARIES_ERROR
 */
export function closeTutorialError(error) {
  return {
    type: CLOSE_TUTORIAL_ERROR,
    error,
  };
}

/**
* @description addUserToStore  action
* @author PravinKumar
* @since 29 May 2018
* @param  {object} data data added by user
*
* @return {object}    An action object with a type of ADD_USER_TO_STORE
*/
export function addUserToStore(data) {
  return {
    type: ADD_USER_TO_STORE,
    data,
  };
}

/**
 * addUserToStore action success
 * @author PravinKumar
 * @since 29 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of ADD_USER_TO_STORE_SUCCESS
 */
export function addUserToStoreSuccess(data) {
  return {
    type: ADD_USER_TO_STORE_SUCCESS,
    data,
  };
}

/**
 * addUserToStore action error
 * @author PravinKumar
 * @since 29 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of ADD_USER_TO_STORE_ERROR
 */
export function addUserToStoreError(error) {
  return {
    type: ADD_USER_TO_STORE_ERROR,
    error,
  };
}

/**
 * INVITED TRIP action
 * @author PravinKumar
 * @since 29 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of INVITED_TRIP
 */
export function invitedTrip(data) {
  return {
    type: INVITED_TRIP,
    data,
  };
}
/**
 * INVITED TRIP action success
 * @author PravinKumar
 * @since 29 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of INVITED_TRIP_SUCCESS
 */
export function invitedTripSuccess(data) {
  return {
    type: INVITED_TRIP_SUCCESS,
    data,
  };
}

/**
 * INVITED TRIP action
 * @author PravinKumar
 * @since 29 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of INVITED_TRIP_ERROR
 */
export function invitedTripError(error) {
  return {
    type: INVITED_TRIP_ERROR,
    error,
  };
}

/**
 * INVITED TRIP action success
 * @author PravinKumar
 * @since 29 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of TRIP_BY_URL
 */
export function tripByUrl(data) {
  return {
    type: TRIP_BY_URL,
    data,
  };
}
/**
 * INVITED TRIP action error
 * @author PravinKumar
 * @since 29 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of TRIP_BY_URL_SUCCESS
 */
export function tripByUrlSuccess(data) {
  return {
    type: TRIP_BY_URL_SUCCESS,
    data,
  };
}

/**
 * INVITED TRIP action error
 * @author PravinKumar
 * @since 29 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of TRIP_BY_URL_ERROR
 */
export function tripByUrlError(error) {
  return {
    type: TRIP_BY_URL_ERROR,
    error,
  };
}
