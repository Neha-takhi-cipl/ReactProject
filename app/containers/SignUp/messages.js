/*
 * SignUp Messages
 *
 * This contains all the text for the SignUp component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.SignUp.header',
    defaultMessage: 'Sign Up',
  },
  fieldWarning: {
    id: 'app.containers.SignUp.fieldWarning',
    defaultMessage: 'This field is required.',
  },
  emailFieldWarning: {
    id: 'app.containers.SignUp.emailFieldWarning',
    defaultMessage: 'Please use correct format.',
  },
  passwordFieldWarning: {
    id: 'app.containers.SignUp.passwordFieldWarning',
    defaultMessage: 'Please use correct format.',
  },
  facebook: {
    id: 'app.containers.SignUp.facebook',
    defaultMessage: 'Register with Facebook',
  },
  signupbtn: {
    id: 'app.containers.SignUp.signup',
    defaultMessage: 'Sign up',
  },
  already_account: {
    id: 'app.containers.SignUp.already_account',
    defaultMessage: 'Already got an account?',
  },
  signin: {
    id: 'app.containers.SignUp.signin',
    defaultMessage: 'Sign in here.',
  },
  fbEmailWarning: {
    id: 'app.containers.SignUp.fbEmailWarning',
    defaultMessage: 'An email is not return by facebook.',
  },
  emailalreadyregistered: {
    id: 'app.containers.SignUp.emailalreadyregistered',
    defaultMessage: 'An email is already registered.',
  },
});
