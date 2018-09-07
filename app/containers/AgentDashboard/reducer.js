/*
 *
 * AgentDashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_NEW_JOBS_REQUEST,
  GET_NEW_JOBS_SUCCESS,
  GET_NEW_JOBS_ERROR,
  ASSIGN_JOBS_REQUEST,
  ASSIGN_JOBS_SUCCESS,
  ASSIGN_JOBS_ERROR,
} from './constants';

const initialState = fromJS({
  newJobs: {
    loading: false,
    error: false,
    response: {},
  },
  assignJob: {
    loading: false,
    error: false,
    response: {},
  },
});

function agentDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEW_JOBS_REQUEST:
      return state
        .setIn(['newJobs', 'loading'], true)
        .setIn(['newJobs', 'error'], false);
    case GET_NEW_JOBS_SUCCESS:
      return state
        .setIn(['newJobs', 'response'], action.data)
        .setIn(['newJobs', 'loading'], false)
        .setIn(['newJobs', 'error'], false);
    case GET_NEW_JOBS_ERROR:
      return state
        .setIn(['newJobs', 'loading'], false)
        .setIn(['newJobs', 'error'], true);
    case ASSIGN_JOBS_REQUEST:
      return state
        .setIn(['assignJob', 'loading'], true)
        .setIn(['assignJob', 'error'], false);
    case ASSIGN_JOBS_SUCCESS:
      return state
        .setIn(['assignJob', 'response'], action.data)
        .setIn(['assignJob', 'loading'], false)
        .setIn(['assignJob', 'error'], false);
    case ASSIGN_JOBS_ERROR:
      return state
        .setIn(['assignJob', 'loading'], false)
        .setIn(['assignJob', 'error'], true);
    default:
      return state;
  }
}

export default agentDashboardReducer;
