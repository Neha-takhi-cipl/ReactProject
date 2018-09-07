import { createSelector } from 'reselect';

/**
 * Direct selector to the bookingDone state domain
 */
const selectBookingDoneDomain = (state) => state.get('bookingDone');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignUp
 */

const makeSelectFullname = () => createSelector(
  selectBookingDoneDomain,
  (signUpState) => signUpState.get('fullname')
);

const makeSelectEmail = () => createSelector(
  selectBookingDoneDomain,
  (signUpState) => signUpState.get('email')
);

const makeSelectPassword = () => createSelector(
  selectBookingDoneDomain,
  (signUpState) => signUpState.get('password')
);

const makeSelectFacebooksignup = () => createSelector(
  selectBookingDoneDomain,
  (signUpState) => signUpState.get('facebooksignup')
);
export {
  selectBookingDoneDomain,
  makeSelectFullname,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectFacebooksignup,
};
