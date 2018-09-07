/*
 *
 * ForgotPassword actions
 *
 */

import {
  CHANGE_EMAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 22 May 2018
 * @param  {email} email The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_EMAIL
 */
export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}
/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 22 May 2018
 *
 * @return {object}    An action object with a type of FORGOT_PASSWORD_REQUEST
 */
export function forgetPasswordRequest() {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
}
/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 22 May 2018
 * @param  {email} email The new text of the input field
 *
 * @return {object}    An action object with a type of FORGOT_PASSWORD_SUCCESS
 */
export function forgetPasswordSuccess(data) {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    data,
  };
}
/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 22 May 2018
 * @param  {string} error The new text of the input field
 *
 * @return {object}    An action object with a type of FORGOT_PASSWORD_ERROR
 */
export function forgetPasswordError(error) {
  return {
    type: FORGOT_PASSWORD_ERROR,
    error,
  };
}
