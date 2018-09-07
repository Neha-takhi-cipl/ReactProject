/**
 *  @description AppReducer this file contains all global actions related to global state scope.
 *  @author PravinKumar
 *  @since 17 May 2018
 *
 */

import { fromJS } from 'immutable';

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
  INVITED_TRIP_SUCCESS,
  TRIP_BY_URL_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loggedInUser: {
    response: {},
    loading: false,
    error: false,
  },
  user: {
    loading: false,
    error: false,
    response: {},
    pictureLoading: false,
    pictureError: false,
    pictureResponse: {},
  },
  login: {
    loading: false,
    error: false,
    loginResponse: {},
  },
  guestJobData: {
    selfPlanned: -1,
    stepOne: {
      flight: false,
      accom: false,
      activities: false,
      totalbudget: '',
      travellers: 1,
      kidsunder15: false,
    },
    stepTwo: {
      where: '',
      whereFlexible: false,
      when: '',
      whenFlexible: false,
      otherDetails: '',
    },
  },
  invitedTrip: '',
  tripByUrl: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return state
        .setIn(['user', 'loading'], true)
        .setIn(['user', 'error'], false)
        .setIn(['user', 'signUpResponse'], {});
    case SIGNUP_SUCCESS:
      return state
        .setIn(['user', 'signUpResponse'], action.signUpResponse)
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], false);
    case SIGNUP_ERROR:
      return state
        .setIn(['user', 'signUpResponse'], action.error)
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], true);
    case FACEBOOK_LOGIN_REQUEST:
      return state
        .setIn(['login', 'loading'], true)
        .setIn(['login', 'error'], false)
        .setIn(['login', 'loginResponse'], {});
    case LOGIN_REQUEST:
      return state
        .setIn(['login', 'loading'], true)
        .setIn(['login', 'error'], false)
        .setIn(['login', 'loginResponse'], {});
    case LOGIN_SUCCESS:
      return state
        .setIn(['login', 'loading'], false)
        .setIn(['login', 'error'], false)
        .setIn(['login', 'loginResponse'], action.loginResponse);
    case LOGIN_ERROR:
      return state
        .setIn(['login', 'loading'], false)
        .setIn(['login', 'error'], true)
        .setIn(['login', 'loginResponse'], action.error);
    case PLANNED_TYPE_CHANGE:
      return state
        .setIn(['guestJobData', 'stepOne'], {})
        .setIn(['guestJobData', 'stepTwo'], {})
        .setIn(['guestJobData', 'selfPlanned'], action.data);
    case GUEST_JOB_DATA_STEP_ONE:
      return state
        .setIn(['guestJobData', 'stepOne'], action.data);
    case GUEST_JOB_DATA_STEP_TWO:
      return state
        .setIn(['guestJobData', 'stepTwo'], action.data);
    case GET_USER_REQUEST:
      return state
        .setIn(['user', 'loading'], true)
        .setIn(['user', 'error'], false)
        .setIn(['user', 'response'], {});
    case GET_USER_SUCCESS:
      return state
        .setIn(['user', 'response'], action.data)
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], false);
    case GET_USER_ERROR:
      return state
        .setIn(['user', 'response'], action.error)
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], true);
    case CLOSE_TUTORIAL_REQUEST:
      return state
        .setIn(['user', 'loading'], true)
        .setIn(['user', 'error'], false);
    case CLOSE_TUTORIAL_SUCCESS:
      return state
        .setIn(['user', 'response', 'data', 'isPopupEnabled'], action.data)
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], false);
    case CLOSE_TUTORIAL_ERROR:
      return state
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], true);
    case ADD_USER_TO_STORE:
      return state
        .setIn(['loggedInUser', 'loading'], true)
        .setIn(['loggedInUser', 'error'], false);
    case ADD_USER_TO_STORE_SUCCESS:
      return state
        .setIn(['loggedInUser', 'response'], action.data)
        .setIn(['loggedInUser', 'loading'], false)
        .setIn(['loggedInUser', 'error'], false);
    case ADD_USER_TO_STORE_ERROR:
      return state
        .setIn(['loggedInUser', 'loading'], false)
        .setIn(['loggedInUser', 'error'], true);
    case INVITED_TRIP_SUCCESS:
      return state
        .set('invitedTrip', action.data);
    case TRIP_BY_URL_SUCCESS:
      return state
        .set('tripByUrl', action.data);
    default:
      return state;
  }
}

export default appReducer;
