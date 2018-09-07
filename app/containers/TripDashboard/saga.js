import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { API_ENDPOINTS } from 'appConfig';
import auth from 'utils/auth';
import {
  // GET_USER_REQUEST,
  CLOSE_TUTORIAL_REQUEST,
} from 'containers/App/constants';
import {
  GET_USER_REQUEST,
  UPDATE_USER_REQUEST,
  UPDATE_PROFILE_PICTURE_REQUEST,
  CREATE_TRIP_REQUEST,
  GET_TRIPS_REQUEST,
  GET_TRIPBYID_REQUEST,
  ADD_ITINERARY_REQUEST,
  GET_ITINERARIES_REQUEST,
  UPDATE_TRIP_REQUEST,
  REMOVE_ITINERARY_REQUEST,
  UPDATE_ITINERARY_REQUEST,
  UPDATE_TRIPNAME_REQUEST,
  UPLOAD_ATTACHMENT_REQUEST,
  ADD_TRIP_TO_USER_REQUEST,
} from './constants';
import {
  getUserDataSuccess,
  getUserDataError,
  updateUserDataSuccess,
  updateUserDataError,
  updateProfilePictureSuccess,
  updateProfilePictureError,
  createTripSuccess,
  createTripError,
  getItinerariesSuccess,
  getItinerariesError,
  addItinerarySuccess,
  addItineraryError,
  getTripByIdSuccess,
  getTripByIdError,
  getTripsSuccess,
  getTripsError,
  updateTripSuccess,
  updateTripError,
  updateItinerarySuccess,
  updateItineraryError,
  removeItinerarySuccess,
  removeItineraryError,
  updateTripNameSuccess,
  updateTripNameError,
  uploadAttachmentSuccess,
  uploadAttachmentError,
  addtripToUserSuccess,
  addtripToUserError,
} from './actions';
import { makeSelectTripPreference } from '../App/selectors';
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
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, requestParam);
    yield put(getUserDataSuccess(response));
  } catch (err) {
    yield put(getUserDataError(err));
  }
}

/**
 * @description SignUp the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* updateUser(action) {
  const requestURL = `${API_ENDPOINTS.updateUserProfile}`;
  const requestData = {};
  requestData.fullName = action.data.fullName;
  requestData.email = action.data.email;
  if (action.data.password !== undefined && action.data.password !== '') {
    requestData.password = action.data.password;
  }
  const requestParam = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
    body: JSON.stringify(requestData),
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, requestParam);
    yield put(updateUserDataSuccess(response));
  } catch (err) {
    yield put(updateUserDataError(err));
  }
}

/**
 * @description SignUp the user  request/response handler
 * @author PravinKumar
 * @since 17 May 2018
 */
export function* updateProfilePicture(action) {
  const requestURL = `${API_ENDPOINTS.uploadProfilePic}`;
  const fd = new FormData();
  fd.append('picture', action.file);
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
    yield put(updateProfilePictureSuccess(response));
  } catch (err) {
    yield put(updateProfilePictureError(err));
  }
}

/**
 * @description createTrip of user  request/response handler
 * @author PravinKumar
 * @since 6 JUN 2018
 */
export function* createTrip(action) {
  const tripName = action.tripName;
  const tripPrefernce = yield select(makeSelectTripPreference());
  let requestParam = {};
  if (tripPrefernce.selfPlanned === 1) {
    requestParam = {
      tripName,
      optionList: {
        flight: tripPrefernce.stepOne.flight,
        accomodation: tripPrefernce.stepOne.accom,
        activities: tripPrefernce.stepOne.activities,
      },
      tripDestination: {
        location: tripPrefernce.stepTwo.where,
        flexible: tripPrefernce.stepTwo.whereFlexible,
      },
      tripSchedule: {
        departureDate: tripPrefernce.stepTwo.when,
        flexible: tripPrefernce.stepTwo.whenFlexible,
      },
      totalBudget: tripPrefernce.stepOne.totalbudget,
      travelersCount: tripPrefernce.stepOne.travellers,
      underFifteenTravellers: tripPrefernce.stepOne.kidsunder15,
      otherDetails: tripPrefernce.stepTwo.otherDetails,
      isSelfPlanned: false,
    };
  } else if (tripPrefernce.selfPlanned === 0) {
    requestParam = {
      tripName,
      isSelfPlanned: true,
    };
  }
  const requestURL = `${API_ENDPOINTS.createTrip}`;
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(requestParam),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestOptions);
    yield put(createTripSuccess(Response));
  } catch (err) {
    yield put(createTripError(err));
  }
}
/**
 * @description getTrips of user  request/response handler
 * @author PravinKumar
 * @since 6 JUN 2018
 */
export function* getTrips() {
  const requestURL = `${API_ENDPOINTS.userTrips}`;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestOptions);
    yield put(getTripsSuccess(Response));
  } catch (err) {
    yield put(getTripsError(err));
  }
}

/**
 * @description getTripById of user trip if called without id return latest trip otherwise requested trip.
 * @author PravinKumar
 * @since 6 JUN 2018
 */
export function* getTripById(action) {
  const tripId = (action.tripId && action.tripId !== '') ? `?tripId=${action.tripId}` : '';
  const requestURL = `${API_ENDPOINTS.tripById}${tripId}`;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    const Response = yield call(request, requestURL, requestOptions);
    if (Response.status === 200) {
      yield put(getTripByIdSuccess(Response));
    } else {
      yield put(getTripByIdError(Response));
    }
  } catch (err) {
    yield put(getTripByIdError(err));
  }
}

/**
 * @description getTripById of user  request/response handler
 * @author PravinKumar
 * @since 6 JUN 2018
 */
export function* addItinerary(action) {
  const requestParam = action.data;

  const requestURL = `${API_ENDPOINTS.itinerary}`;
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(requestParam),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    const Response = yield call(request, requestURL, requestOptions);
    if (Response.status === 200) {
      yield put(addItinerarySuccess(Response));
    } else {
      yield put(addItineraryError(Response));
    }
  } catch (err) {
    yield put(addItineraryError(err));
  }
}

/**
 * @description getItineraries of user  request/response handler
 * @author PravinKumar
 * @since 11 JUN 2018
 */
export function* getItineraries(action) {
  const requestData = action.data;
  const requestURL = `${API_ENDPOINTS.addTripItinerary}`;
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestOptions);
    yield put(getItinerariesSuccess(Response));
  } catch (err) {
    yield put(getItinerariesError(err));
  }
}

/**
 * @description closeTutorial of user  request/response handler
 * @author PravinKumar
 * @since 6 JUN 2018
 */
export function* closeTutorial(action) {
  const userId = action.data;
  const requestURL = `${API_ENDPOINTS.uesrTutotial}/${userId}`;
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify({ isPopupEnabled: false }),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestOptions);
    if (Response) {
      yield put(getUserDataSuccess(Response));
    }
  } catch (err) {
    yield put(getUserDataError(err));
  }
}

/**
 * @description closeTutorial of user  request/response handler
 * @author PravinKumar
 * @since 6 JUN 2018
 */
export function* updateTrip(action) {
  const requestData = action.requestData;
  const tripId = requestData.id;
  const requestURL = `${API_ENDPOINTS.tripUpdate}/${tripId}`;
  const requestParam = {
    tripName: requestData.tripName,
    optionList: {
      flight: requestData.flight,
      accomodation: requestData.accomodation,
      activities: requestData.activities,
    },
    tripDestination: {
      location: requestData.where,
      flexible: requestData.whereFlexible,
    },
    tripSchedule: {
      departureDate: requestData.when,
      flexible: requestData.whenFlexible,
    },
    totalBudget: requestData.totalbudget,
    travelersCount: requestData.travellers,
    underFifteenTravellers: requestData.kidsunder15,
    otherDetails: requestData.otherDetails,
  };
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(requestParam),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestOptions);
    if (Response) {
      yield put(updateTripSuccess(requestParam));
    }
  } catch (err) {
    yield put(updateTripError(err));
  }
}

/**
 * @description update Itinerary of user  request/response handler
 * @author PravinKumar
 * @since 18 JUN 2018
 */
export function* updateItinerary(action) {
  const requestData = (action.requestData.action !== 'book') ? { itinerary: action.requestData } : action.requestData;
  const requestURL = (requestData.action !== 'book') ? `${API_ENDPOINTS.itinerary}/${requestData.itinerary.itineraryId}` : `${API_ENDPOINTS.updateItinerary}/${requestData.itineraryId}`;

  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestOptions);
    if (Response) {
      yield put(updateItinerarySuccess(Response));
    }
  } catch (err) {
    yield put(updateItineraryError(err));
  }
}

/**
 * @description remove Itinerary of user  request/response handler
 * @author PravinKumar
 * @since 18 JUN 2018
 */
export function* removeItinerary(action) {
  const requestData = action.requestData;
  const requestURL = `${API_ENDPOINTS.removeItinerary}/${requestData.itineraryId}`;
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestOptions);
    if (Response) {
      yield put(removeItinerarySuccess(Response));
    }
  } catch (err) {
    yield put(removeItineraryError(err));
  }
}

/**
 * @description update Trip Name of user  request/response handler
 * @author PravinKumar
 * @since 18 JUN 2018
 */
export function* updateTripName(action) {
  const requestData = action.requestData;
  const requestURL = `${API_ENDPOINTS.tripUpdate}/${requestData.tripId}`;
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify({ tripName: requestData.tripName }),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const Response = yield call(request, requestURL, requestOptions);
    if (Response) {
      yield put(updateTripNameSuccess(Response));
    }
  } catch (err) {
    yield put(updateTripNameError(err));
  }
}

/**
 * @description upload Picture  request/response handler
 * @author PravinKumar
 * @since 23 Jun 2018
 */
export function* uploadAttachment(action) {
  const requestURL = `${API_ENDPOINTS.uploadAttachment}`;
  const fd = new FormData();
  fd.append('uploadFile', action.data);
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
    yield put(uploadAttachmentSuccess(response));
  } catch (err) {
    yield put(uploadAttachmentError(err));
  }
}

/**
 * @description Add trip to User  request/response handler
 * @author PravinKumar
 * @since 23 Jun 2018
 */
export function* tripToUser(action) {
  const requestURL = `${API_ENDPOINTS.inviteFriend}`;
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(action.data),
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': auth.get('jwtToken'),
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, requestOptions);
    yield put(addtripToUserSuccess(response));
  } catch (err) {
    yield put(addtripToUserError(err));
  }
}

/**
 * @description Root saga manages watcher lifecycle
 * @author PravinKumar
 * @since 17 May 2018
 */

export default function* Watcher() {
  yield takeLatest(GET_USER_REQUEST, getUser);
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
  yield takeLatest(UPDATE_PROFILE_PICTURE_REQUEST, updateProfilePicture);
  yield takeLatest(CREATE_TRIP_REQUEST, createTrip);
  yield takeLatest(GET_TRIPS_REQUEST, getTrips);
  yield takeLatest(GET_TRIPBYID_REQUEST, getTripById);
  yield takeLatest(ADD_ITINERARY_REQUEST, addItinerary);
  yield takeLatest(GET_ITINERARIES_REQUEST, getItineraries);
  yield takeLatest(CLOSE_TUTORIAL_REQUEST, closeTutorial);
  yield takeLatest(UPDATE_TRIP_REQUEST, updateTrip);
  yield takeLatest(UPDATE_ITINERARY_REQUEST, updateItinerary);
  yield takeLatest(REMOVE_ITINERARY_REQUEST, removeItinerary);
  yield takeLatest(UPDATE_TRIPNAME_REQUEST, updateTripName);
  yield takeLatest(UPLOAD_ATTACHMENT_REQUEST, uploadAttachment);
  yield takeLatest(ADD_TRIP_TO_USER_REQUEST, tripToUser);
}
