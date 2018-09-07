import { createSelector } from 'reselect';

/**
 * Direct selector to the adminDashboard state domain
 */
const selectAdminDashboardDomain = (state) => state.get('adminDashboard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AdminDashboard
 */
const makeSelectGetJobsLoading = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['jobs', 'loading'])
);

const makeSelectGetJobsError = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['jobs', 'error'])
);

const makeSelectGetJobsResponse = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['jobs', 'response'])
);

const makeSelectAdminDashboard = () => createSelector(
  selectAdminDashboardDomain,
  (substate) => substate.toJS()
);
const makeSelectAddAgentLoading = () => createSelector(
  selectAdminDashboardDomain,
  (tripDashboardState) => tripDashboardState.getIn(['addAgent', 'loading'])
);
const makeSelectAddAgentError = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['addAgent', 'error'])
);
const makeSelectAddAgentResponse = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['addAgent', 'response'])
);
const makeSelectUpdateAgentLoading = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['updateAgent', 'loading'])
);
const makeSelectUpdateAgentError = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['updateAgent', 'error'])
);
const makeSelectUpdateAgentResponse = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['updateAgent', 'response'])
);
const makeSelectGetAgentsLoading = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['getAgents', 'loading'])
);
const makeSelectGetAgentsError = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['getAgents', 'error'])
);
const makeSelectGetAgentsResponse = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['getAgents', 'response'])
);
const makeSelectPictureLoading = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['agentPicture', 'pictureLoading'])
);

const makeSelectPictureError = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['agentPicture', 'pictureError'])
);

const makeSelectPictureResponse = () => createSelector(
  selectAdminDashboardDomain,
  (dashboardState) => dashboardState.getIn(['agentPicture', 'pictureResponse'])
);
export default makeSelectAdminDashboard;
export {
  selectAdminDashboardDomain,
  makeSelectGetJobsLoading,
  makeSelectGetJobsError,
  makeSelectGetJobsResponse,
  makeSelectAddAgentLoading,
  makeSelectAddAgentError,
  makeSelectAddAgentResponse,
  makeSelectUpdateAgentLoading,
  makeSelectUpdateAgentError,
  makeSelectUpdateAgentResponse,
  makeSelectGetAgentsLoading,
  makeSelectGetAgentsError,
  makeSelectGetAgentsResponse,
  makeSelectPictureLoading,
  makeSelectPictureError,
  makeSelectPictureResponse,
};
