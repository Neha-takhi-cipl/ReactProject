/*
 * UserPopup Messages
 *
 * This contains all the text for the UserPopup component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'app.components.UserPopup.name',
    defaultMessage: 'Name',
  },
  email: {
    id: 'app.components.UserPopup.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'app.components.UserPopup.password',
    defaultMessage: 'Password',
  },
  fieldWarning: {
    id: 'app.components.UserPopup.fieldWarning',
    defaultMessage: 'This field is required.',
  },
  emailFieldWarning: {
    id: 'app.components.UserPopup.emailFieldWarning',
    defaultMessage: 'Please use correct format.',
  },
  passwordFieldWarning: {
    id: 'app.components.UserPopup.passwordFieldWarning',
    defaultMessage: 'Please use correct format.',
  },
});
