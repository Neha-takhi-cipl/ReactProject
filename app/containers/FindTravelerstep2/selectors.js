import { createSelector } from 'reselect';

/**
 * Direct selector to the findTravelerstep2 state domain
 */
const selectFindTravelerstep2 = (state) => state.get('findTravelerstep2');

/**
 * Other specific selectors
 */

/**
 * Default selector used by FindTravelerstep2
 */

const makeSelectWhere = () => createSelector(
  selectFindTravelerstep2,
  (findTravlerstep2State) => findTravlerstep2State.get('where')
);
const makeSelectWhereFlexible = () => createSelector(
  selectFindTravelerstep2,
  (findTravlerstep2State) => findTravlerstep2State.get('whereFlexible')
);
const makeSelectWhen = () => createSelector(
  selectFindTravelerstep2,
  (findTravlerstep2State) => findTravlerstep2State.get('when')
);
const makeSelectWhenFlexible = () => createSelector(
  selectFindTravelerstep2,
  (findTravlerstep2State) => findTravlerstep2State.get('whenFlexible')
);
const makeSelectOtherDetails = () => createSelector(
  selectFindTravelerstep2,
  (findTravlerstep2State) => findTravlerstep2State.get('otherDetails')
);

export {
  selectFindTravelerstep2,
  makeSelectWhere,
  makeSelectWhereFlexible,
  makeSelectWhen,
  makeSelectWhenFlexible,
  makeSelectOtherDetails,
};
