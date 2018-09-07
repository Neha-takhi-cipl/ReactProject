/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  FACEBOOK_DATA,
} from './constants';

const initialState = fromJS({
  email: '',
  password: '',
  facebookdata: {},
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state
        .set('email', action.email);
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password);
    case FACEBOOK_DATA:
      return state
        .set('facebookdata', action);
    default:
      return state;
  }
}

export default loginReducer;
