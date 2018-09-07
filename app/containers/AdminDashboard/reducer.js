/*
 *
 * AdminDashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  ADD_AGENT_REQUEST,
  ADD_AGNET_SUCCESS,
  ADD_AGENT_ERROR,
  UPDATE_AGENT_REQUEST,
  UPDATE_AGENT_SUCCESS,
  UPDATE_AGENT_ERROR,
  GET_AGENTS_REQUEST,
  GET_AGENTS_SUCCESS,
  GET_AGENTS_ERROR,
  UPLOAD_PICTURE_REQUEST,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_ERROR,
} from './constants';

const initialState = fromJS({
  jobs: {
    loading: false,
    error: false,
    response: {},
  },
  addAgent: {
    loading: false,
    error: false,
    response: {},
  },
  updateAgent: {
    loading: false,
    error: false,
    response: {},
  },
  getAgents: {
    loading: false,
    error: false,
    response: {},
  },
  agentPicture: {
    loading: false,
    error: false,
    pictureResponse: {},
  },
});

function adminDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS_REQUEST:
      return state
        .setIn(['jobs', 'loading'], true)
        .setIn(['jobs', 'error'], false);
    case GET_JOBS_SUCCESS:
      return state
        .setIn(['jobs', 'response'], action.data)
        .setIn(['jobs', 'loading'], false)
        .setIn(['jobs', 'error'], false);
    case GET_JOBS_ERROR:
      return state
        .setIn(['jobs', 'loading'], false)
        .setIn(['jobs', 'error'], true);
    case ADD_AGENT_REQUEST:
      return state
        .setIn(['addAgent', 'loading'], true)
        .setIn(['addAgent', 'error'], false);
    case ADD_AGNET_SUCCESS:
      return state
        .setIn(['addAgent', 'response'], action.data)
        .setIn(['addAgent', 'loading'], false)
        .setIn(['addAgent', 'error'], false);
    case ADD_AGENT_ERROR:
      return state
        .setIn(['addAgent', 'loading'], false)
        .setIn(['addAgent', 'error'], true);
    case UPDATE_AGENT_REQUEST:
      return state
        .setIn(['updateAgent', 'loading'], true)
        .setIn(['updateAgent', 'error'], false);
    case UPDATE_AGENT_SUCCESS:
      return state
        .setIn(['updateAgent', 'response'], action.data)
        .setIn(['updateAgent', 'loading'], false)
        .setIn(['updateAgent', 'error'], false);
    case UPDATE_AGENT_ERROR:
      return state
        .setIn(['updateAgent', 'loading'], false)
        .setIn(['updateAgent', 'error'], true);
    case GET_AGENTS_REQUEST:
      return state
        .setIn(['getAgents', 'loading'], true)
        .setIn(['getAgents', 'error'], false);
    case GET_AGENTS_SUCCESS:
      return state
        .setIn(['getAgents', 'response'], action.data)
        .setIn(['getAgents', 'loading'], false)
        .setIn(['getAgents', 'error'], false);
    case GET_AGENTS_ERROR:
      return state
        .setIn(['getAgents', 'loading'], false)
        .setIn(['getAgents', 'error'], true);
    case UPLOAD_PICTURE_REQUEST:
      return state
        .setIn(['agentPicture', 'pictureLoading'], true)
        .setIn(['agentPicture', 'pictureError'], false)
        .setIn(['agentPicture', 'pictureResponse'], {});
    case UPLOAD_PICTURE_SUCCESS:
      return state
        .setIn(['agentPicture', 'pictureResponse'], action.data)
        .setIn(['agentPicture', 'pictureLoading'], false)
        .setIn(['agentPicture', 'pictureError'], false);
    case UPLOAD_PICTURE_ERROR:
      return state
        .setIn(['agentPicture', 'pictureResponse'], action.error)
        .setIn(['agentPicture', 'pictureLoading'], false)
        .setIn(['agentPicture', 'pictureError'], true);
    default:
      return state;
  }
}

export default adminDashboardReducer;
