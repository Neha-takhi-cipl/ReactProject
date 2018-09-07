/*
 *
 * FindTravlerstep1 reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_FLIGHT,
  CHANGE_ACOMM,
  CHANGE_ACTIVITES,
  CHANGE_TOTAL_BUDGET,
  CHANGE_TRAVELLERS,
  CHANGE_KIDS_UNDER_15,
} from './constants';

const initialState = fromJS({
  flight: false,
  accom: false,
  activities: false,
  totalbudget: '',
  travellers: 1,
  kidsunder15: false,
});

function findTravlerstep1Reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FLIGHT:
      return state
        .set('flight', action.data);
    case CHANGE_ACOMM:
      return state
        .set('accom', action.data);
    case CHANGE_ACTIVITES:
      return state
        .set('activities', action.data);
    case CHANGE_TOTAL_BUDGET:
      return state
        .set('totalbudget', action.data);
    case CHANGE_TRAVELLERS:
      return state
        .set('travellers', action.data);
    case CHANGE_KIDS_UNDER_15:
      return state
        .set('kidsunder15', action.data);
    default:
      return state;
  }
}

export default findTravlerstep1Reducer;
