import { createSelector } from 'reselect';

/**
 * Direct selector to the signUp state domain
 */
const selectSignUpDomain = (state) => state.get('signUp');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignUp
 */

const makeSelectFullname = () => createSelector(
  selectSignUpDomain,
  (signUpState) => signUpState.get('fullname')
);

const makeSelectEmail = () => createSelector(
  selectSignUpDomain,
  (signUpState) => signUpState.get('email')
);

const makeSelectPassword = () => createSelector(
  selectSignUpDomain,
  (signUpState) => signUpState.get('password')
);

const makeSelectFacebooksignup = () => createSelector(
  selectSignUpDomain,
  (signUpState) => signUpState.get('facebooksignup')
);
export {
  selectSignUpDomain,
  makeSelectFullname,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectFacebooksignup,
};
