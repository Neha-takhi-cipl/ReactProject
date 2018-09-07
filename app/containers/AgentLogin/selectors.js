import { createSelector } from 'reselect';

/**
 * Direct selector to the agentLogin state domain
 */
const selectAgentLogin = (state) => state.get('agentLogin');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AgentLogin
 */

const makeSelectEmail = () => createSelector(
  selectAgentLogin,
  (loginState) => loginState.get('email')
);

const makeSelectPassword = () => createSelector(
  selectAgentLogin,
  (loginState) => loginState.get('password')
);

export {
  selectAgentLogin,
  makeSelectEmail,
  makeSelectPassword,
};
