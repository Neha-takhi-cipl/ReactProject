
import { fromJS } from 'immutable';
import chooseTripReducer from '../reducer';

describe('chooseTripReducer', () => {
  it('returns the initial state', () => {
    expect(chooseTripReducer(undefined, {})).toEqual(fromJS({}));
  });
});
