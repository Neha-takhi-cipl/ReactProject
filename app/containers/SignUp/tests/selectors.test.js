import { fromJS } from 'immutable';

import {
  selectSignUpDomain,
  makeSelectFullname,
  makeSelectEmail,
  makeSelectPassword,
} from '../selectors';

describe('selectSignUpDomain', () => {
  it('should select the signup state', () => {
    const signUpState = fromJS({});
    const mockedState = fromJS({
      signup: signUpState,
    });
    expect(selectSignUpDomain(mockedState)).toEqual(signUpState);
  });
});

describe('makeSelectFullname', () => {
  it('should select the Fullname', () => {
    const fullname = 'Test Name';
    const mockedState = fromJS({
      signUp: {
        fullname,
      },
    });
    expect(makeSelectFullname(mockedState)).toEqual(fullname);
  });
});

describe('makeSelectEmail', () => {
  it('should select the email', () => {
    const email = 'test@gmail.com';
    const mockedState = fromJS({
      signUp: {
        email,
      },
    });
    expect(makeSelectEmail(mockedState)).toEqual(email);
  });
});

describe('makeSelectPassword', () => {
  it('should select the password', () => {
    const password = 'Test3ame';
    const mockedState = fromJS({
      signUp: {
        password,
      },
    });
    expect(makeSelectPassword(mockedState)).toEqual(password);
  });
});
