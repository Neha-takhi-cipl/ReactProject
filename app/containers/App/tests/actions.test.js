import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
  } from '../constants';

import {
  signupRequest,
  signupSuccess,
  signupError,
} from '../actions';

describe('App Actions', () => {
  describe('signupRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SIGNUP_REQUEST,
      };

      expect(signupRequest()).toEqual(expectedResult);
    });
  });

  describe('signupSuccess', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = {
        status: 200,
        message: 'Registration Successful',
      };
      const expectedResult = {
        type: SIGNUP_SUCCESS,
        signUpResponse: fixture,
      };
      expect(signupSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('signupError', () => {
    it('should return the correct type and the error', () => {
      const fixture = 'Something went wrong!';
      const expectedResult = {
        type: SIGNUP_ERROR,
        error: fixture,
      };
      expect(signupError(fixture)).toEqual(expectedResult);
    });
  });
});
