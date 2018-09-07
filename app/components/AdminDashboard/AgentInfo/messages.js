/*
 * AgentInfo Messages
 *
 * This contains all the text for the AgentInfo component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'app.components.agentinfo.name',
    defaultMessage: 'Name',
  },
  email: {
    id: 'app.components.agentinfo.email',
    defaultMessage: 'Email',
  },
  From: {
    id: 'app.components.agentinfo.From',
    defaultMessage: 'From',
  },
  password: {
    id: 'app.components.agentinfo.password',
    defaultMessage: 'Password',
  },
  Agentinfo: {
    id: 'app.components.agentinfo.Agentinfo',
    defaultMessage: 'Agent info',
  },
  Locations: {
    id: 'app.components.agentinfo.Locations',
    defaultMessage: 'Locations',
  },
  Activites: {
    id: 'app.components.agentinfo.Activites',
    defaultMessage: 'Activites',
  },
  Expertise: {
    id: 'app.components.agentinfo.Expertise',
    defaultMessage: 'Expertise',
  },
  fieldWarning: {
    id: 'app.components.agentinfo.fieldWarning',
    defaultMessage: 'This field is required.',
  },
  emailFieldWarning: {
    id: 'app.components.agentinfo.emailFieldWarning',
    defaultMessage: 'Please use correct format.',
  },
  passwordFieldWarning: {
    id: 'app.components.agentinfo.passwordFieldWarning',
    defaultMessage: 'Please use correct format.',
  },
  emailalreadyregistered: {
    id: 'app.containers.agentinfo.emailalreadyregistered',
    defaultMessage: 'An email is already registered.',
  },
});
