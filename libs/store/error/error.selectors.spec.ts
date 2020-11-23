import { mockInitialRootState } from '../root/root-state.mock';

import { errorSelectors } from './error.selectors';

describe('Error Selectors', () => {
  describe('initial state', () => {
    it('should return null for error', () => {
      const actual = errorSelectors.getError(mockInitialRootState);
      const expected = null;

      expect(actual).toEqual(expected);
    });
  });
});
