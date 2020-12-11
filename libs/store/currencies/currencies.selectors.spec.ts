import { FetchStatus } from '../models/fetch-status.enum';
import { mockInitialRootState } from '../root/models/root-state.mock';

import { currenciesSelectors } from './currencies.selectors';

describe('Currencies Selectors', () => {
  describe('initial state', () => {
    it('should return countries', () => {
      const actual = currenciesSelectors.getCurrencies(mockInitialRootState);
      const expected = [];

      expect(actual).toEqual(expected);
    });

    it('should return countries fetch status', () => {
      const actual = currenciesSelectors.getCurrenciesFetchStatus(
        mockInitialRootState
      );
      const expected = FetchStatus.Initial;

      expect(actual).toEqual(expected);
    });
  });
});
