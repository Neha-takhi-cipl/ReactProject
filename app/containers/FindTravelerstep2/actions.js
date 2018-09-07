/*
 *
 * FindTravelerstep2 actions
 *
 */

import {
  CHANGE_WHERE,
  CHANGE_WHARE_FLEXIBLE,
  CHANGE_WHEN,
  CHANGE_WHEN_FLEXIBLE,
  CHANGE_OTHER_DETAILS,
} from './constants';

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {string} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_WHERE
 */
export function changeWhere(data) {
  return {
    type: CHANGE_WHERE,
    data,
  };
}

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {bool} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_WHERE
 */
export function changeWhereFlexible(data) {
  return {
    type: CHANGE_WHARE_FLEXIBLE,
    data,
  };
}

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {string} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_WHEN
 */
export function changeWhen(data) {
  return {
    type: CHANGE_WHEN,
    data,
  };
}

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {bool} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_WHEN_FLEXIBLE
 */
export function changeWhenFlexible(data) {
  return {
    type: CHANGE_WHEN_FLEXIBLE,
    data,
  };
}

/**
 * Changes the input field of the form
 * @author PravinKumar
 * @since 21 May 2018
 * @param  {string} data The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_OTHER_DETAILS
 */
export function changeOtherDetails(data) {
  return {
    type: CHANGE_OTHER_DETAILS,
    data,
  };
}
