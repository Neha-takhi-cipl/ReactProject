/*
 *
 * FindTravelerstep2 reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_WHERE,
  CHANGE_WHARE_FLEXIBLE,
  CHANGE_WHEN,
  CHANGE_WHEN_FLEXIBLE,
  CHANGE_OTHER_DETAILS,
} from './constants';

const initialState = fromJS({
  where: '',
  whereFlexible: false,
  when: '',
  whenFlexible: false,
  otherDetails: '',
});

function findTravelerstep2Reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WHERE:
      return state.set('where', action.data);
    case CHANGE_WHARE_FLEXIBLE:
      return state.set('whereFlexible', action.data);
    case CHANGE_WHEN:
      return state.set('when', action.data);
    case CHANGE_WHEN_FLEXIBLE:
      return state.set('whenFlexible', action.data);
    case CHANGE_OTHER_DETAILS:
      return state.set('otherDetails', action.data);
    default:
      return state;
  }
}

export default findTravelerstep2Reducer;
