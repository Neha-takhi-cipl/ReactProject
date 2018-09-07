/*
 *
 * FindTravlerstep1 actions
 *
 */

import {
  CHANGE_FLIGHT,
  CHANGE_ACOMM,
  CHANGE_ACTIVITES,
  CHANGE_TOTAL_BUDGET,
  CHANGE_TRAVELLERS,
  CHANGE_KIDS_UNDER_15,
} from './constants';

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {bool} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_FLIGHT
 */
export function changeFlight(data) {
  return {
    type: CHANGE_FLIGHT,
    data,
  };
}

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {bool} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_ACOMM
 */
export function changeAccom(data) {
  return {
    type: CHANGE_ACOMM,
    data,
  };
}

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {bool} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_ACTIVITES
 */
export function changeActivities(data) {
  return {
    type: CHANGE_ACTIVITES,
    data,
  };
}

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {string} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_TOTAL_BUDGET
 */
export function changeTotalbudget(data) {
  return {
    type: CHANGE_TOTAL_BUDGET,
    data,
  };
}
/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {string} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_TRAVELLERS
 */
export function changeTraveller(data) {
  return {
    type: CHANGE_TRAVELLERS,
    data,
  };
}

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {bool} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_KIDS_UNDER_15
 */
export function changeKidsunder15(data) {
  return {
    type: CHANGE_KIDS_UNDER_15,
    data,
  };
}
