import { mockInitialRootState } from '../root/root-state.mock';

import { searchFormSelectors } from './search-form.selectors';

describe('Search Form Selectors', () => {
  describe('initial state', () => {
    it('should return search form value', () => {
      const actual = searchFormSelectors.getSearchFormValues(
        mockInitialRootState
      );
      const expected = null;

      expect(actual).toEqual(expected);
    });
  });
});
