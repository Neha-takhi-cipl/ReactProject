/**
 * @description AppConstants contains all global scope constants
 * @description Each action has a corresponding type, which the reducer knows and picks up on.
 * @description To avoid weird typos between the reducer and the actions.
 * @author PravinKumar
 * @since 17 May 2018
 *
 */

export const DEFAULT_LOCALE = 'en';
export const SIGNUP_REQUEST = 'RoamingDuck/App/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'RoamingDuck/App/SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'RoamingDuck/App/SIGNUP_ERROR';

// facebook signup/login
export const FACEBOOK_LOGIN_REQUEST = 'RoamingDuck/App/FACEBOOK_LOGIN_REQUEST';
export const LOGIN_REQUEST = 'RoamingDuck/App/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'RoamingDuck/App/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'RoamingDuck/App/LOGIN_ERROR';

// facebook initial Job Data
export const PLANNED_TYPE_CHANGE = 'RoamingDuck/App/PLANNED_TYPE_CHANGE';
export const GUEST_JOB_DATA_STEP_ONE = 'RoamingDuck/App/GUEST_JOB_DATA_STEP_ONE';
export const GUEST_JOB_DATA_STEP_TWO = 'RoamingDuck/App/GUEST_JOB_DATA_STEP_TWO';

export const GET_USER_REQUEST = 'RoamingDuck/App/GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'RoamingDuck/App/GET_USER_SUCCESS';
export const GET_USER_ERROR = 'RoamingDuck/App/GET_USER_ERROR';

export const CLOSE_TUTORIAL_REQUEST = 'RoamingDuck/TripDashboard/CLOSE_TUTORIAL_REQUEST';
export const CLOSE_TUTORIAL_SUCCESS = 'RoamingDuck/TripDashboard/CLOSE_TUTORIAL_SUCCESS';
export const CLOSE_TUTORIAL_ERROR = 'RoamingDuck/TripDashboard/CLOSE_TUTORIAL_ERROR';

// check logged in user
export const ADD_USER_TO_STORE = 'RoamingDuck/App/ADD_USER_TO_STORE';
export const ADD_USER_TO_STORE_SUCCESS = 'RoamingDuck/App/ADD_USER_TO_STORE_SUCCESS';
export const ADD_USER_TO_STORE_ERROR = 'RoamingDuck/App/ADD_USER_TO_STORE_ERROR';

// invitedTrip
export const INVITED_TRIP = 'RoamingDuck/App/INVITED_TRIP';
export const INVITED_TRIP_SUCCESS = 'RoamingDuck/App/INVITED_TRIP_SUCCESS';
export const INVITED_TRIP_ERROR = 'RoamingDuck/App/INVITED_TRIP_ERROR';

// invitedTrip
export const TRIP_BY_URL = 'RoamingDuck/App/TRIP_BY_URL';
export const TRIP_BY_URL_SUCCESS = 'RoamingDuck/App/TRIP_BY_URL_SUCCESS';
export const TRIP_BY_URL_ERROR = 'RoamingDuck/App/TRIP_BY_URL_ERROR';
