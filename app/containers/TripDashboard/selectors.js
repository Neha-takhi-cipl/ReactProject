import { createSelector } from 'reselect';

/**
 * Direct selector to the tripDashboard state domain
 */
const selectTripDashboard = (state) => state.get('tripDashboard');
const selectGlobalState = (state) => state.get('global');

/**
 * Other specific selectors
 */
const makeSelectGetUserLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'loading'])
);

const makeSelectGetUserError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'error'])
);

const makeSelectGetUserResponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'response'])
);

const makeSelectPictureLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'pictureLoading'])
);

const makeSelectPictureError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'pictureError'])
);

const makeSelectPictureResponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'pictureResponse'])
);

const makeSelectCreatedTripLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'lastCreated', 'loading'])
);

const makeSelectCreatedTripError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'lastCreated', 'error'])
);

const makeSelectCreatedTripResponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'lastCreated', 'response'])
);

const makeSelectTripPreference = () => createSelector(
  selectGlobalState,
  (globalState) => globalState.get('guestJobData').toJS()
);

const makeSelectIsOpenNewTripPopup = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'isOpenNewTripPopup'])
);

const makeSelectGetTripListLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'tripList', 'loading'])
);

const makeSelectGetTripListError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'tripList', 'error'])
);

const makeSelectGetTripList = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'tripList', 'list'])
);


const makeSelectGetTripLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'defaultTrip', 'loading'])
);

const makeSelectGetTripError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'defaultTrip', 'error'])
);

const makeSelectGetTripDetails = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'defaultTrip', 'details'])
);

const makeSelectGetTripPreferance = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'defaultTrip', 'preferance'])
);

const makeSelectGetTripItinerary = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'defaultTrip', 'itinerary'])
);


const makeSelectAddItineraryReponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'addItinerary', 'response'])
);

const makeSelectAddItineraryLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'addItinerary', 'loading'])
);

const makeSelectAddItineraryError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'addItinerary', 'error'])
);

const makeSelectUpdateTripLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'updateTrip', 'loading'])
);

const makeSelectUpdateTripError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'updateTrip', 'error'])
);

const makeSelectUpdateTripResponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'updateTrip', 'response'])
);

const makeSelectUpdateItineraryLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'updateItinerary', 'loading'])
);

const makeSelectUpdateItineraryError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'updateItinerary', 'error'])
);

const makeSelectUpdateItineraryResponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'updateItinerary', 'response'])
);

const makeSelectRemoveItineraryLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'removeItinerary', 'loading'])
);

const makeSelectRemoveItineraryError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'removeItinerary', 'error'])
);

const makeSelectRemoveItineraryResponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'removeItinerary', 'response'])
);

const makeSelectUpdateTripNameLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'updateTripName', 'loading'])
);

const makeSelectUpdateTripNameError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'updateTripName', 'error'])
);

const makeSelectUpdateTripNameResponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'updateTripName', 'response'])
);

const makeSelectUploadAttachmentLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'uploadAttachment', 'loading'])
);

const makeSelectUploadAttachmentError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'uploadAttachment', 'error'])
);

const makeSelectUploadAttachmentResponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['trips', 'uploadAttachment', 'response'])
);

const makeSelectTripToUsertLoading = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['tripToUser', 'loading'])
);

const makeSelectTripToUserError = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['tripToUser', 'error'])
);

const makeSelectTripToUserResponse = () => createSelector(
  selectTripDashboard,
  (tripDashboardState) => tripDashboardState.getIn(['tripToUser', 'response'])
);

/**
 * Default selector used by TripDashboard
 */

export {
  selectTripDashboard,
  makeSelectGetUserLoading,
  makeSelectGetUserError,
  makeSelectGetUserResponse,
  makeSelectPictureLoading,
  makeSelectPictureError,
  makeSelectPictureResponse,
  makeSelectCreatedTripLoading,
  makeSelectCreatedTripError,
  makeSelectCreatedTripResponse,
  makeSelectTripPreference,
  makeSelectIsOpenNewTripPopup,
  makeSelectGetTripListLoading,
  makeSelectGetTripListError,
  makeSelectGetTripList,
  makeSelectGetTripDetails,
  makeSelectGetTripPreferance,
  makeSelectGetTripItinerary,
  makeSelectGetTripLoading,
  makeSelectGetTripError,
  makeSelectAddItineraryReponse,
  makeSelectAddItineraryLoading,
  makeSelectAddItineraryError,
  makeSelectUpdateTripResponse,
  makeSelectUpdateTripLoading,
  makeSelectUpdateTripError,
  makeSelectUpdateItineraryLoading,
  makeSelectUpdateItineraryError,
  makeSelectUpdateItineraryResponse,
  makeSelectRemoveItineraryLoading,
  makeSelectRemoveItineraryError,
  makeSelectRemoveItineraryResponse,
  makeSelectUpdateTripNameLoading,
  makeSelectUpdateTripNameError,
  makeSelectUpdateTripNameResponse,
  makeSelectUploadAttachmentLoading,
  makeSelectUploadAttachmentError,
  makeSelectUploadAttachmentResponse,
  makeSelectTripToUsertLoading,
  makeSelectTripToUserError,
  makeSelectTripToUserResponse,
};
