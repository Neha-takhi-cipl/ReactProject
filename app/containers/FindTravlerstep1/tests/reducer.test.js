
import { fromJS } from 'immutable';
import findTravlerstep1Reducer from '../reducer';

describe('findTravlerstep1Reducer', () => {
  it('returns the initial state', () => {
    expect(findTravlerstep1Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
