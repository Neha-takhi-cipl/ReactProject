/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Login.header',
    defaultMessage: 'Login',
  },
  headerSubtitle: {
    id: 'app.containers.Login.headerSubtitle',
    defaultMessage: 'Earn money helping travllers plan their trips!!!',
  },
  forgotPassword: {
    id: 'app.containers.Login.forgotPassword',
    defaultMessage: 'forgot your password?',
  },
  fieldWarning: {
    id: 'app.containers.SignUp.fieldWarning',
    defaultMessage: 'This field is required.',
  },
  emailFieldWarning: {
    id: 'app.containers.Login.emailFieldWarning',
    defaultMessage: 'Please use correct format.',
  },
  passwordFieldWarning: {
    id: 'app.containers.Login.passwordFieldWarning',
    defaultMessage: 'Please use correct format.',
  },
  facebook: {
    id: 'app.containers.Login.facebook',
    defaultMessage: 'Log in with Facebook',
  },
  loginbtn: {
    id: 'app.containers.Login.loginbtn',
    defaultMessage: 'Login',
  },
  notAccount: {
    id: 'app.containers.Login.alreadyAccount',
    defaultMessage: 'dont have an account?',
  },
  signup: {
    id: 'app.containers.Login.signup',
    defaultMessage: 'Sign up here.',
  },
  fbEmailWarning: {
    id: 'app.containers.Login.fbEmailWarning',
    defaultMessage: 'An email is not return by facebook.',
  },
  emailNotRegistered: {
    id: 'app.containers.Login.emailNotRegistered',
    defaultMessage: 'Email and Password don\'t match. Please try again.',
  },
  passwordIncorrect: {
    id: 'app.containers.Login.passwordIncorrect',
    defaultMessage: 'Email and Password don\'t match. Please try again.',
  },
});
