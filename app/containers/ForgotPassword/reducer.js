/*
 *
 * ForgotPassword reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_EMAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
} from './constants';

const initialState = fromJS({
  email: '',
  loading: false,
  error: false,
  response: {},
});

function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state
        .set('email', action.email);
    case FORGOT_PASSWORD_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('response', {});
    case FORGOT_PASSWORD_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('response', action.data);
    case FORGOT_PASSWORD_ERROR:
      return state
        .set('loading', false)
        .set('error', false)
        .set('response', action.error);
    default:
      return state;
  }
}

export default forgotPasswordReducer;
