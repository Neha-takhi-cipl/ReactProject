
import { fromJS } from 'immutable';
import findTravelerstep2Reducer from '../reducer';

describe('findTravelerstep2Reducer', () => {
  it('returns the initial state', () => {
    expect(findTravelerstep2Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
