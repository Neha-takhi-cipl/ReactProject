/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */

// import { put, takeLatest } from 'redux-saga/effects';
// import { SIGNUP_REQUEST, BASE_URL } from 'containers/App/constants';
// import { signupSuccess, signupError } from 'containers/App/actions';

import { signUp } from '../saga';
describe('signUp Saga', () => {
  beforeEach(() => {
    const signUpGenerator = signUp();

    const selectDescriptor = signUpGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });
});
