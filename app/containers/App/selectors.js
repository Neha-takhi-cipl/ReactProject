/**
 * @description The global state selectors
 * @author PravinKumar
 * @since 17 May 2018
 *
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectSignupLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['user', 'loading'])
);

const makeSelectSignUpResponse = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['user', 'signUpResponse'])
);

const makeSelectSignupError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['user', 'error'])
);

const makeSelectLoginLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['login', 'loading'])
);

const makeSelectLoginResponse = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['login', 'loginResponse'])
);

const makeSelectLoginError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['login', 'error'])
);

const makeSelectGuestJob = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('guestJobData')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectTripPreference = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('guestJobData').toJS()
);

const makeSelectTripType = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['guestJobData', 'selfPlanned'])
);

const makeSelectGetUserLoading = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'loading'])
);

const makeSelectGetUserError = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'error'])
);

const makeSelectGetUserResponse = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'response'])
);

const makeSelectPictureLoading = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'pictureLoading'])
);

const makeSelectPictureError = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'pictureError'])
);

const makeSelectPictureResponse = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'pictureResponse'])
);
const makeSelectisPopupEnabled = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['user', 'response', 'data', 'isPopupEnabled'])
);
const makeSelectLoggedInUserLoading = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['loggedInUser', 'loading'])
);

const makeSelectLoggedInUserError = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['loggedInUser', 'error'])
);

const makeSelectLoggedInUserResponse = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.getIn(['loggedInUser', 'response'])
);
const makeSelectInvitedTrip = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.get('invitedTrip')
);
const makeSelectTripByUrl = () => createSelector(
  selectGlobal,
  (tripDashboardState) => tripDashboardState.get('tripByUrl')
);
export {
  selectGlobal,
  makeSelectSignupLoading,
  makeSelectSignUpResponse,
  makeSelectSignupError,
  makeSelectLoginLoading,
  makeSelectLoginResponse,
  makeSelectLoginError,
  makeSelectGuestJob,
  makeSelectLocation,
  makeSelectTripPreference,
  makeSelectTripType,
  makeSelectGetUserLoading,
  makeSelectGetUserError,
  makeSelectGetUserResponse,
  makeSelectPictureLoading,
  makeSelectPictureError,
  makeSelectPictureResponse,
  makeSelectisPopupEnabled,
  makeSelectLoggedInUserLoading,
  makeSelectLoggedInUserError,
  makeSelectLoggedInUserResponse,
  makeSelectInvitedTrip,
  makeSelectTripByUrl,
};
