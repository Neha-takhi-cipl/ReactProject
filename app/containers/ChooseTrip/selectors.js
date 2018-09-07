import { createSelector } from 'reselect';

/**
 * Direct selector to the chooseTrip state domain
 */
const selectChooseTripDomain = (state) => state.get('chooseTrip');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ChooseTrip
 */

const makeSelectChooseTrip = () => createSelector(
  selectChooseTripDomain,
  (substate) => substate.toJS()
);

export default makeSelectChooseTrip;
export {
  selectChooseTripDomain,
};
