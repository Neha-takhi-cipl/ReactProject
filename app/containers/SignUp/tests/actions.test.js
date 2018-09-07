
import {
  changeFullname,
  changeEmail,
  changePassword,
} from '../actions';
import {
  CHANGE_FULLNAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
} from '../constants';


describe('SignUp actions', () => {
  describe('changeFullname', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Test Name';
      const expectedResult = {
        type: CHANGE_FULLNAME,
        fullname: fixture,
      };
      expect(changeFullname(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeEmail', () => {
    it('should return the correct type and the passed email', () => {
      const fixture = 'test@gmail.com';
      const expectedResult = {
        type: CHANGE_EMAIL,
        email: fixture,
      };
      expect(changeEmail(fixture)).toEqual(expectedResult);
    });
  });
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'werty12';
      const expectedResult = {
        type: CHANGE_PASSWORD,
        password: fixture,
      };
      expect(changePassword(fixture)).toEqual(expectedResult);
    });
  });
});
