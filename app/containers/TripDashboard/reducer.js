/*
 *
 * TripDashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_PROFILE_PICTURE_REQUEST,
  UPDATE_PROFILE_PICTURE_SUCCESS,
  UPDATE_PROFILE_PICTURE_ERROR,
  CREATE_TRIP_REQUEST,
  CREATE_TRIP_SUCCESS,
  CREATE_TRIP_ERROR,
  OPEN_CREATE_TRIP_POPUP,
  GET_TRIPS_REQUEST,
  GET_TRIPS_SUCCESS,
  GET_TRIPS_ERROR,
  GET_TRIPBYID_REQUEST,
  GET_TRIPBYID_SUCCESS,
  GET_TRIPBYID_ERROR,
  ADD_ITINERARY_REQUEST,
  ADD_ITINERARY_SUCCESS,
  ADD_ITINERARY_ERROR,
  GET_ITINERARIES_REQUEST,
  GET_ITINERARIES_SUCCESS,
  GET_ITINERARIES_ERROR,
  UPDATE_TRIP_REQUEST,
  UPDATE_TRIP_SUCCESS,
  UPDATE_TRIP_ERROR,
  UPDATE_ITINERARY_REQUEST,
  UPDATE_ITINERARY_SUCCESS,
  UPDATE_ITINERARY_ERROR,
  REMOVE_ITINERARY_REQUEST,
  REMOVE_ITINERARY_SUCCESS,
  REMOVE_ITINERARY_ERROR,
  UPDATE_TRIPNAME_REQUEST,
  UPDATE_TRIPNAME_SUCCESS,
  UPDATE_TRIPNAME_ERROR,
  UPLOAD_ATTACHMENT_REQUEST,
  UPLOAD_ATTACHMENT_SUCCESS,
  UPLOAD_ATTACHMENT_ERROR,
  ADD_TRIP_TO_USER_REQUEST,
  ADD_TRIP_TO_USER_SUCCESS,
  ADD_TRIP_TO_USER_ERROR,
} from './constants';

const initialState = fromJS({
  user: {
    loading: false,
    error: false,
    response: {},
    pictureLoading: false,
    pictureError: false,
    pictureResponse: {},
  },
  trips: {
    lastCreated: {
      loading: false,
      error: false,
      response: {},
    },
    tripList: {
      loading: false,
      error: false,
      list: {},
    },
    defaultTrip: {
      loading: false,
      error: false,
      details: {},
      preferance: {},
      itinerary: {},
    },
    addItinerary: {
      loading: false,
      error: false,
      response: {},
    },
    updateItinerary: {
      loading: false,
      error: false,
      response: {},
    },
    removeItinerary: {
      loading: false,
      error: false,
      response: {},
    },
    updateTrip: {
      response: {},
      loading: false,
      error: false,
    },
    updateTripName: {
      response: {},
      loading: false,
      error: false,
    },
    uploadAttachment: {
      response: {},
      loading: false,
      error: false,
    },
    isOpenNewTripPopup: false,
  },
  tripToUser: {
    response: {},
    loading: false,
    error: false,
  },
});

function tripDashboardReducer(state = initialState, action) {
  switch (action.type) {
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
    case UPDATE_USER_REQUEST:
      return state
        .setIn(['user', 'loading'], true)
        .setIn(['user', 'error'], false)
        .setIn(['user', 'response'], {});
    case UPDATE_USER_SUCCESS:
      return state
        .setIn(['user', 'response'], action.data)
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], false);
    case UPDATE_USER_ERROR:
      return state
        .setIn(['user', 'response'], action.error)
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], true);
    case UPDATE_PROFILE_PICTURE_REQUEST:
      return state
        .setIn(['user', 'pictureLoading'], true)
        .setIn(['user', 'pictureError'], false)
        .setIn(['user', 'pictureResponse'], {});
    case UPDATE_PROFILE_PICTURE_SUCCESS:
      return state
        .setIn(['user', 'pictureResponse'], action.data)
        .setIn(['user', 'pictureLoading'], false)
        .setIn(['user', 'pictureError'], false);
    case UPDATE_PROFILE_PICTURE_ERROR:
      return state
        .setIn(['user', 'pictureResponse'], action.error)
        .setIn(['user', 'pictureLoading'], false)
        .setIn(['user', 'pictureError'], true);
    case CREATE_TRIP_REQUEST:
      return state
        .setIn(['trips', 'lastCreated', 'loading'], true)
        .setIn(['trips', 'lastCreated', 'error'], false)
        .setIn(['trips', 'lastCreated', 'response'], {});
    case CREATE_TRIP_SUCCESS:
      return state
        .setIn(['trips', 'lastCreated', 'response'], action.data)
        .setIn(['trips', 'lastCreated', 'error'], false)
        .setIn(['trips', 'lastCreated', 'loading'], false);
    case CREATE_TRIP_ERROR:
      return state
        .setIn(['trips', 'lastCreated', 'response'], action.error)
        .setIn(['trips', 'lastCreated', 'loading'], false)
        .setIn(['trips', 'lastCreated', 'error'], true);
    case GET_TRIPS_REQUEST:
      return state
        .setIn(['trips', 'tripList', 'loading'], true)
        .setIn(['trips', 'tripList', 'error'], false);
    case GET_TRIPS_SUCCESS:
      return state
        .setIn(['trips', 'tripList', 'list'], action.data)
        .setIn(['trips', 'tripList', 'error'], false)
        .setIn(['trips', 'tripList', 'loading'], false);
    case GET_TRIPS_ERROR:
      return state
        .setIn(['trips', 'tripList', 'loading'], false)
        .setIn(['trips', 'tripList', 'error'], true);
    case GET_TRIPBYID_REQUEST:
      return state
        .setIn(['trips', 'defaultTrip', 'loading'], true)
        .setIn(['trips', 'defaultTrip', 'error'], false);
    case GET_TRIPBYID_SUCCESS:
      return state
        .setIn(['trips', 'defaultTrip', 'details'], action.details)
        .setIn(['trips', 'defaultTrip', 'error'], false)
        .setIn(['trips', 'defaultTrip', 'loading'], false);
    case GET_TRIPBYID_ERROR:
      return state
        .setIn(['trips', 'defaultTrip', 'loading'], false)
        .setIn(['trips', 'defaultTrip', 'error'], true);
    case ADD_ITINERARY_REQUEST:
      return state
        .setIn(['trips', 'addItinerary', 'loading'], true)
        .setIn(['trips', 'addItinerary', 'error'], false);
    case ADD_ITINERARY_SUCCESS:
      return state
        .setIn(['trips', 'addItinerary', 'response'], action.data)
        .setIn(['trips', 'addItinerary', 'error'], false)
        .setIn(['trips', 'addItinerary', 'loading'], false);
    case ADD_ITINERARY_ERROR:
      return state
        .setIn(['trips', 'addItinerary', 'loading'], false)
        .setIn(['trips', 'addItinerary', 'error'], true);
    case GET_ITINERARIES_REQUEST:
      return state
        .setIn(['trips', 'defaultTrip', 'loading'], true)
        .setIn(['trips', 'defaultTrip', 'error'], false);
    case GET_ITINERARIES_SUCCESS:
      return state
        .setIn(['trips', 'defaultTrip', 'itinerary'], action.data)
        .setIn(['trips', 'defaultTrip', 'error'], false)
        .setIn(['trips', 'defaultTrip', 'loading'], false);
    case GET_ITINERARIES_ERROR:
      return state
        .setIn(['trips', 'defaultTrip', 'loading'], false)
        .setIn(['trips', 'defaultTrip', 'error'], true);
    case UPDATE_TRIP_REQUEST:
      return state
        .setIn(['trips', 'updateTrip', 'loading'], true)
        .setIn(['trips', 'updateTrip', 'error'], false);
    case UPDATE_TRIP_SUCCESS:
      return state
        .setIn(['trips', 'updateTrip', 'response'], action.data)
        .setIn(['trips', 'updateTrip', 'error'], false)
        .setIn(['trips', 'updateTrip', 'loading'], false);
    case UPDATE_TRIP_ERROR:
      return state
        .setIn(['trips', 'updateTrip', 'loading'], false)
        .setIn(['trips', 'updateTrip', 'error'], true);
    case UPDATE_ITINERARY_REQUEST:
      return state
        .setIn(['trips', 'updateItinerary', 'loading'], true)
        .setIn(['trips', 'updateItinerary', 'error'], false);
    case UPDATE_ITINERARY_SUCCESS:
      return state
        .setIn(['trips', 'updateItinerary', 'response'], action.data)
        .setIn(['trips', 'updateItinerary', 'error'], false)
        .setIn(['trips', 'updateItinerary', 'loading'], false);
    case UPDATE_ITINERARY_ERROR:
      return state
        .setIn(['trips', 'updateItinerary', 'loading'], false)
        .setIn(['trips', 'updateItinerary', 'error'], true);
    case REMOVE_ITINERARY_REQUEST:
      return state
        .setIn(['trips', 'removeItinerary', 'loading'], true)
        .setIn(['trips', 'removeItinerary', 'error'], false);
    case REMOVE_ITINERARY_SUCCESS:
      return state
        .setIn(['trips', 'removeItinerary', 'response'], action.data)
        .setIn(['trips', 'removeItinerary', 'error'], false)
        .setIn(['trips', 'removeItinerary', 'loading'], false);
    case REMOVE_ITINERARY_ERROR:
      return state
        .setIn(['trips', 'updateTrip', 'loading'], false)
        .setIn(['trips', 'updateTrip', 'error'], true);
    case UPDATE_TRIPNAME_REQUEST:
      return state
        .setIn(['trips', 'updateTripName', 'loading'], true)
        .setIn(['trips', 'updateTripName', 'error'], false);
    case UPDATE_TRIPNAME_SUCCESS:
      return state
        .setIn(['trips', 'updateTripName', 'response'], action.data)
        .setIn(['trips', 'updateTripName', 'error'], false)
        .setIn(['trips', 'updateTripName', 'loading'], false);
    case UPDATE_TRIPNAME_ERROR:
      return state
        .setIn(['trips', 'updateTripName', 'loading'], false)
        .setIn(['trips', 'updateTripName', 'error'], true);
    case UPLOAD_ATTACHMENT_REQUEST:
      return state
        .setIn(['trips', 'uploadAttachment', 'loading'], true)
        .setIn(['trips', 'uploadAttachment', 'error'], false);
    case UPLOAD_ATTACHMENT_SUCCESS:
      return state
        .setIn(['trips', 'uploadAttachment', 'response'], action.data)
        .setIn(['trips', 'uploadAttachment', 'error'], false)
        .setIn(['trips', 'uploadAttachment', 'loading'], false);
    case UPLOAD_ATTACHMENT_ERROR:
      return state
        .setIn(['trips', 'uploadAttachment', 'loading'], false)
        .setIn(['trips', 'uploadAttachment', 'error'], true);
    case ADD_TRIP_TO_USER_REQUEST:
      return state
        .setIn(['tripToUser', 'loading'], true)
        .setIn(['tripToUser', 'error'], false);
    case ADD_TRIP_TO_USER_SUCCESS:
      return state
        .setIn(['tripToUser', 'response'], action.data)
        .setIn(['tripToUser', 'error'], false)
        .setIn(['tripToUser', 'loading'], false);
    case ADD_TRIP_TO_USER_ERROR:
      return state
        .setIn(['tripToUser', 'loading'], false)
        .setIn(['tripToUser', 'error'], true);
    case OPEN_CREATE_TRIP_POPUP:
      return state
        .setIn(['trips', 'isOpenNewTripPopup'], action.data);
    default:
      return state;
  }
}

export default tripDashboardReducer;
