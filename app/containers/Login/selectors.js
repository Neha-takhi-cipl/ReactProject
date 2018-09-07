import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLogin = (state) => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */
const makeSelectEmail = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('email')
);

const makeSelectPassword = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('password')
);
const makeSelectFacebookData = () => createSelector(
  selectLogin,
  (signUpState) => signUpState.get('facebookdata')
);
export {
  selectLogin,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectFacebookData,
};
