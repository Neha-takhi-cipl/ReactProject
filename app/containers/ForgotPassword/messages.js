/*
 * ForgotPassword Messages
 *
 * This contains all the text for the ForgotPassword component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  Forgot: {
    id: 'app.containers.ForgotPassword.Forgot',
    defaultMessage: 'Forgot Password',
  },
  submit: {
    id: 'app.containers.ForgotPassword.submit',
    defaultMessage: 'Submit',
  },
  fieldWarning: {
    id: 'app.containers.ForgotPassword.fieldWarning',
    defaultMessage: 'This field is required.',
  },
  emailFieldWarning: {
    id: 'app.containers.ForgotPassword.emailFieldWarning',
    defaultMessage: 'Please enter correct email format.',
  },
  already_account: {
    id: 'app.containers.ForgotPassword.already_account',
    defaultMessage: 'Already got an account?',
  },
  signin: {
    id: 'app.containers.ForgotPassword.signin',
    defaultMessage: 'Sign in here.',
  },
  passwordSend: {
    id: 'app.containers.ForgotPassword.passwordSend',
    defaultMessage: 'New password has been sent to registered email address. Please check your inbox.',
  },
  emailNotFound: {
    id: 'app.containers.ForgotPassword.emailNotFound',
    defaultMessage: 'This email address is not registered. Please try again.',
  },
});
