
import { fromJS } from 'immutable';
import tripDashboardReducer from '../reducer';

describe('tripDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(tripDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
