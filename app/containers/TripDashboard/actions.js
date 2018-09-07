/*
 *
 * TripDashboard actions
 *
 */

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
 * Update request for loggedin user details action
 * @author PravinKumar
 * @since 17 May 2018
 * @return {object}    An action object with a type of UPDATE_USER_REQUEST
 */
export function updateUserData(data) {
  return {
    type: UPDATE_USER_REQUEST,
    data,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} data
 * @return {object}    An action object with a type of GET_USER_REQUEST
 */
export function updateUserDataSuccess(data) {
  return {
    type: UPDATE_USER_SUCCESS,
    data,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} error
 * @return {object}    An action object with a type of UPDATE_USER_ERROR
 */
export function updateUserDataError(error) {
  return {
    type: UPDATE_USER_ERROR,
    error,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} file
 * @return {object}    An action object with a type of UPDATE_PROFILE_PICTURE_REQUEST
 */
export function updateProfilePicture(file) {
  return {
    type: UPDATE_PROFILE_PICTURE_REQUEST,
    file,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} data
 * @return {object}    An action object with a type of UPDATE_PROFILE_PICTURE_SUCCESS
 */
export function updateProfilePictureSuccess(data) {
  return {
    type: UPDATE_PROFILE_PICTURE_SUCCESS,
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
export function updateProfilePictureError(error) {
  return {
    type: UPDATE_PROFILE_PICTURE_ERROR,
    error,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {string} tripName
 * @return {object}    An action object with a type of CREATE_TRIP_REQUEST
 */
export function createTrip(tripName) {
  return {
    type: CREATE_TRIP_REQUEST,
    tripName,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} data
 * @return {object}    An action object with a type of CREATE_TRIP_SUCCESS
 */
export function createTripSuccess(data) {
  return {
    type: CREATE_TRIP_SUCCESS,
    data,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {object} error
 * @return {object}    An action object with a type of CREATE_TRIP_ERROR
 */
export function createTripError(error) {
  return {
    type: CREATE_TRIP_ERROR,
    error,
  };
}

/**
 * Update request for loggedin user details success action
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {Boolean} data
 * @return {object}    An action object with a type of OPEN_CREATE_TRIP_POPUP
 */
export function createTripPopupIsOpen(data) {
  return {
    type: OPEN_CREATE_TRIP_POPUP,
    data,
  };
}

/**
 * Get trips action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @return {object}    An action object with a type of GET_TRIPS_REQUEST
 */
export function getTrips() {
  return {
    type: GET_TRIPS_REQUEST,
  };
}

/**
 * Get trips action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of GET_TRIPS_SUCCESS
 */
export function getTripsSuccess(data) {
  return {
    type: GET_TRIPS_SUCCESS,
    data,
  };
}

/**
 * Get trips action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of GET_TRIPS_ERROR
 */
export function getTripsError(error) {
  return {
    type: GET_TRIPS_ERROR,
    error,
  };
}

/**
 * Get trip action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {string} tripId
 * @return {object}    An action object with a type of GET_TRIPBYID_REQUEST
 */
export function getTripById(tripId) {
  return {
    type: GET_TRIPBYID_REQUEST,
    tripId,
  };
}

/**
 * Get trip action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of GET_TRIPBYID_SUCCESS
 */
export function getTripByIdSuccess(details, preferance, itinerary) {
  return {
    type: GET_TRIPBYID_SUCCESS,
    details,
    preferance,
    itinerary,
  };
}

/**
 * Get trip action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of GET_TRIPBYID_ERROR
 */
export function getTripByIdError(error) {
  return {
    type: GET_TRIPBYID_ERROR,
    error,
  };
}

/**
 * Add trip itinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {string} data
 * @return {object}    An action object with a type of ADD_ITINERARY_REQUEST
 */
export function addItinerary(data) {
  return {
    type: ADD_ITINERARY_REQUEST,
    data,
  };
}

/**
 * Add trip itinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of ADD_ITINERARY_SUCCESS
 */
export function addItinerarySuccess(data) {
  return {
    type: ADD_ITINERARY_SUCCESS,
    data,
  };
}

/**
 * Add trip itinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of ADD_ITINERARY_ERROR
 */
export function addItineraryError(error) {
  return {
    type: ADD_ITINERARY_ERROR,
    error,
  };
}

/**
 * Get trip itinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {string} requestData
 * @return {object}    An action object with a type of GET_ITINERARIES_REQUEST
 */
export function getItineraries(requestData) {
  return {
    type: GET_ITINERARIES_REQUEST,
    requestData,
  };
}

/**
 * Get trip itinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of GET_ITINERARIES_SUCCESS
 */
export function getItinerariesSuccess(data) {
  return {
    type: GET_ITINERARIES_SUCCESS,
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
export function getItinerariesError(error) {
  return {
    type: GET_ITINERARIES_ERROR,
    error,
  };
}

/**
 * updateTrip action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {string} requestData
 * @return {object}    An action object with a type of UPDATE_TRIP_REQUEST
 */
export function updateTrip(requestData) {
  return {
    type: UPDATE_TRIP_REQUEST,
    requestData,
  };
}

/**
 * updateTrip action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of GET_ITINERARIES_SUCCESS
 */
export function updateTripSuccess(data) {
  return {
    type: UPDATE_TRIP_SUCCESS,
    data,
  };
}

/**
 * updateTrip action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of UPDATE_TRIP_ERROR
 */
export function updateTripError(error) {
  return {
    type: UPDATE_TRIP_ERROR,
    error,
  };
}

/**
 * updateItinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {string} requestData
 * @return {object}    An action object with a type of UPDATE_ITINERARY_REQUEST
 */
export function updateItinerary(requestData) {
  return {
    type: UPDATE_ITINERARY_REQUEST,
    requestData,
  };
}

/**
 * updateItinerary success action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of UPDATE_ITINERARY_SUCCESS
 */
export function updateItinerarySuccess(data) {
  return {
    type: UPDATE_ITINERARY_SUCCESS,
    data,
  };
}

/**
 * updateItinerary error action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of UPDATE_ITINERARY_ERROR
 */
export function updateItineraryError(error) {
  return {
    type: UPDATE_ITINERARY_ERROR,
    error,
  };
}

/**
 * removeItinerary action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {string} requestData
 * @return {object}    An action object with a type of REMOVE_ITINERARY_REQUEST
 */
export function removeItinerary(requestData) {
  return {
    type: REMOVE_ITINERARY_REQUEST,
    requestData,
  };
}

/**
 * removeItinerary success action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of REMOVE_ITINERARY_SUCCESS
 */
export function removeItinerarySuccess(data) {
  return {
    type: REMOVE_ITINERARY_SUCCESS,
    data,
  };
}

/**
 * removeItinerary Error action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of REMOVE_ITINERARY_ERROR
 */
export function removeItineraryError(error) {
  return {
    type: REMOVE_ITINERARY_ERROR,
    error,
  };
}

/**
 * updateTripName action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {string} requestData
 * @return {object}    An action object with a type of UPDATE_TRIPNAME_REQUEST
 */
export function updateTripName(requestData) {
  return {
    type: UPDATE_TRIPNAME_REQUEST,
    requestData,
  };
}

/**
 * updateTripName success action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of UPDATE_TRIPNAME_SUCCESS
 */
export function updateTripNameSuccess(data) {
  return {
    type: UPDATE_TRIPNAME_SUCCESS,
    data,
  };
}

/**
 * updateTripName Error action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of UPDATE_TRIPNAME_ERROR
 */
export function updateTripNameError(error) {
  return {
    type: UPDATE_TRIPNAME_ERROR,
    error,
  };
}

/**
 * upload Attachment action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of UPLOAD_ATTACHMENT_REQUEST
 */
export function uploadAttachment(data) {
  return {
    type: UPLOAD_ATTACHMENT_REQUEST,
    data,
  };
}

/**
 * upload Attachment success action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of UPLOAD_ATTACHMENT_SUCCESS
 */
export function uploadAttachmentSuccess(data) {
  return {
    type: UPLOAD_ATTACHMENT_SUCCESS,
    data,
  };
}

/**
 * upload Attachment Error action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of UPLOAD_ATTACHMENT_ERROR
 */
export function uploadAttachmentError(error) {
  return {
    type: UPLOAD_ATTACHMENT_ERROR,
    error,
  };
}

/**
 * ADD_TRIP_TO_USER request action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of ADD_TRIP_TO_USER_REQUEST
 */
export function addtripToUser(data) {
  return {
    type: ADD_TRIP_TO_USER_REQUEST,
    data,
  };
}

/**
 * ADD_TRIP_TO_USER success action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} data
 * @return {object}    An action object with a type of ADD_TRIP_TO_USER_SUCCESS
 */
export function addtripToUserSuccess(data) {
  return {
    type: ADD_TRIP_TO_USER_SUCCESS,
    data,
  };
}

/**
 * ADD_TRIP_TO_USER Error action
 * @author PravinKumar
 * @since 11 JUN 2018
 * @param  {object} error
 * @return {object}    An action object with a type of ADD_TRIP_TO_USER_ERROR
 */
export function addtripToUserError(error) {
  return {
    type: ADD_TRIP_TO_USER_ERROR,
    error,
  };
}
