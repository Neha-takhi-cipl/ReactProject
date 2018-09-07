
import { fromJS } from 'immutable';
import agentLoginReducer from '../reducer';

describe('agentLoginReducer', () => {
  it('returns the initial state', () => {
    expect(agentLoginReducer(undefined, {})).toEqual(fromJS({}));
  });
});
