
import { fromJS } from 'immutable';
import adminDashboardReducer from '../reducer';

describe('adminDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(adminDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
