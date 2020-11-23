import { FetchStatus } from '../models/fetch-status.enum';
import { mockInitialRootState } from '../root/root-state.mock';

import { countriesSelectors } from './countries.selectors';

describe('Countries Selectors', () => {
  describe('initial state', () => {
    test('should return countries', () => {
      const actual = countriesSelectors.getCountries(mockInitialRootState);
      const expected = [];

      expect(actual).toEqual(expected);
    });

    test('should return countries fetch status', () => {
      const actual = countriesSelectors.getCountriesFetchStatus(
        mockInitialRootState
      );
      const expected = FetchStatus.Initial;

      expect(actual).toEqual(expected);
    });
  });
});
