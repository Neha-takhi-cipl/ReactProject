/*
 *
 * Login actions
 *
 */

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  FACEBOOK_DATA,
} from './constants';

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
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
 * @since 21 May 2018
 * @param  {password} password The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

/**
 * Add facebook data to login store
 * @author PravinKumar
 * @since 22 May 2018
 * @param  {string} picture, facebookId, facebook extra values for  signup/login.
 * @return {object}    An action object with a type of EMAIL_LOGIN_REQUEST
 */
export function facebookData(name, email, picture, facebookId, facebook) {
  return {
    type: FACEBOOK_DATA,
    name,
    email,
    picture,
    facebookId,
    facebook,
  };
}
