
import { fromJS } from 'immutable';
import bookingDoneReducer from '../reducer';

describe('bookingDoneReducer', () => {
  it('returns the initial state', () => {
    expect(bookingDoneReducer(undefined, {})).toEqual(fromJS({}));
  });
});
