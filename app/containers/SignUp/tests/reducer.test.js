
import { fromJS } from 'immutable';
import signUpReducer from '../reducer';

import {
  changeFullname,
  changeEmail,
  changePassword,
} from '../actions';

describe('signUpReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      fullname: '',
      email: '',
      password: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(signUpReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeFullname action correctly', () => {
    const fixture = 'Test Hello';
    const expectedResult = state.set('fullname', fixture);

    expect(signUpReducer(state, changeFullname(fixture))).toEqual(expectedResult);
  });
  it('should handle the changeEmail action correctly', () => {
    const fixture = 'test@gmail.com';
    const expectedResult = state.set('email', fixture);

    expect(signUpReducer(state, changeEmail(fixture))).toEqual(expectedResult);
  });
  it('should handle the changePassword action correctly', () => {
    const fixture = '123456yt';
    const expectedResult = state.set('password', fixture);

    expect(signUpReducer(state, changePassword(fixture))).toEqual(expectedResult);
  });
});
