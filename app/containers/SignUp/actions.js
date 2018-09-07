/**
 * @description SignUp actions
 * @author PravinKumar
 * @since 17 May 2018
 *
 */

import {
  CHANGE_FULLNAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  FACEBOOK_SIGNUP,
} from './constants';

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 17 May 2018
 * @param  {fullname} fullname The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_FULLNAME
 */
export function changeFullname(fullname) {
  return {
    type: CHANGE_FULLNAME,
    fullname,
  };
}

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 17 May 2018
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
 * @since 17 May 2018
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
 * Changes the input field of the form
 * @author PravinKumar
 * @since 18 May 2018
 * @param  {string} picture, facebookId, facebook extra values for facebook signup.
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */
export function facebookSignup(name, email, picture, facebookId, facebook) {
  return {
    type: FACEBOOK_SIGNUP,
    name,
    email,
    picture,
    facebookId,
    facebook,
  };
}
