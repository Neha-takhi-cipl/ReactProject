import { createSelector } from 'reselect';

/**
 * Direct selector to the findTravlerstep1 state domain
 */
const selectFindTravlerstep1 = (state) => state.get('findTravlerstep1');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FindTravlerstep1
 */

const makeSelectFlight = () => createSelector(
  selectFindTravlerstep1,
  (findTravlerstep1State) => findTravlerstep1State.get('flight')
);
const makeSelectAccom = () => createSelector(
  selectFindTravlerstep1,
  (findTravlerstep1State) => findTravlerstep1State.get('accom')
);
const makeSelectActivities = () => createSelector(
  selectFindTravlerstep1,
  (findTravlerstep1State) => findTravlerstep1State.get('activities')
);
const makeSelectTotalbudget = () => createSelector(
  selectFindTravlerstep1,
  (findTravlerstep1State) => findTravlerstep1State.get('totalbudget')
);
const makeSelectTraveller = () => createSelector(
  selectFindTravlerstep1,
  (findTravlerstep1State) => findTravlerstep1State.get('travellers')
);
const makeSelectKidsunder15 = () => createSelector(
  selectFindTravlerstep1,
  (findTravlerstep1State) => findTravlerstep1State.get('kidsunder15')
);


export {
  selectFindTravlerstep1,
  makeSelectFlight,
  makeSelectAccom,
  makeSelectActivities,
  makeSelectTotalbudget,
  makeSelectTraveller,
  makeSelectKidsunder15,
};
