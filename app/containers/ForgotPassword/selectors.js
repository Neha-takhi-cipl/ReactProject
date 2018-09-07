import { createSelector } from 'reselect';

/**
 * Direct selector to the forgotPassword state domain
 */
const selectForgotPassword = (state) => state.get('forgotPassword');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ForgotPassword
 */

const makeSelectEmail = () => createSelector(
  selectForgotPassword,
  (forgotPasswordState) => forgotPasswordState.get('email')
);
const makeSelectLoading = () => createSelector(
  selectForgotPassword,
  (forgotPasswordState) => forgotPasswordState.get('loading')
);
const makeSelectError = () => createSelector(
  selectForgotPassword,
  (forgotPasswordState) => forgotPasswordState.get('error')
);
const makeSelectResponse = () => createSelector(
  selectForgotPassword,
  (forgotPasswordState) => forgotPasswordState.get('response')
);
export {
  selectForgotPassword,
  makeSelectEmail,
  makeSelectLoading,
  makeSelectError,
  makeSelectResponse,
};
