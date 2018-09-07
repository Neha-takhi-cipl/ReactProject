/*
 *
 * BookingDone reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_FULLNAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  FACEBOOK_SIGNUP,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  fullname: '',
  email: '',
  password: '',
  facebooksignup: {},
});

function bookingDoneReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FULLNAME:
      return state
        .set('fullname', action.fullname);
    case CHANGE_EMAIL:
      return state
        .set('email', action.email);
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password);
    case FACEBOOK_SIGNUP:
      return state
        .set('facebooksignup', action);
    default:
      return state;
  }
}

export default bookingDoneReducer;
