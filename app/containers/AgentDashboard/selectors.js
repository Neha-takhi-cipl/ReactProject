import { createSelector } from 'reselect';

/**
 * Direct selector to the agentDashboard state domain
 */
const selectAgentDashboardDomain = (state) => state.get('agentDashboard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AgentDashboard
 */

const makeSelectAgentDashboard = () => createSelector(
  selectAgentDashboardDomain,
  (substate) => substate.toJS()
);
const makeSelectGetNewJobsLoading = () => createSelector(
  selectAgentDashboardDomain,
  (tripDashboardState) => tripDashboardState.getIn(['newJobs', 'loading'])
);
const makeSelectGetNewJobsError = () => createSelector(
  selectAgentDashboardDomain,
  (tripDashboardState) => tripDashboardState.getIn(['newJobs', 'error'])
);
const makeSelectGetNewJobsResponse = () => createSelector(
  selectAgentDashboardDomain,
  (tripDashboardState) => tripDashboardState.getIn(['newJobs', 'response'])
);
const makeSelectAssignJobLoading = () => createSelector(
  selectAgentDashboardDomain,
  (tripDashboardState) => tripDashboardState.getIn(['assignJob', 'loading'])
);
const makeSelectAssignJobError = () => createSelector(
  selectAgentDashboardDomain,
  (tripDashboardState) => tripDashboardState.getIn(['assignJob', 'error'])
);
const makeSelectAssignJobResponse = () => createSelector(
  selectAgentDashboardDomain,
  (tripDashboardState) => tripDashboardState.getIn(['assignJob', 'response'])
);

export default makeSelectAgentDashboard;
export {
  selectAgentDashboardDomain,
  makeSelectGetNewJobsLoading,
  makeSelectGetNewJobsError,
  makeSelectGetNewJobsResponse,
  makeSelectAssignJobLoading,
  makeSelectAssignJobError,
  makeSelectAssignJobResponse,
};
