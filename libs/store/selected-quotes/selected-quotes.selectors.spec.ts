import { mockInitialRootState } from '../root/root-state.mock';

import { initialSelectedQuotesState } from './models/selected-quotes-state.initial';
import { selectedQuotesSelectors } from './selected-quotes.selectors';

describe('Search Form Selectors', () => {
  describe('initial state', () => {
    it('should return search form value', () => {
      const actual = selectedQuotesSelectors.getSelectedQuotesState(
        mockInitialRootState
      );
      const expected = initialSelectedQuotesState;

      expect(actual).toEqual(expected);
    });
  });
});
