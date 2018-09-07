/*
 *
 * AgentLogin actions
 *
 */

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
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
