import { FetchStatus } from '../models/fetch-status.enum';
import { mockInitialRootState } from '../root/models/root-state.mock';

import { countriesSelectors } from './countries.selectors';

describe('Countries Selectors', () => {
  describe('initial state', () => {
    it('should return countries', () => {
      const actual = countriesSelectors.getCountries(mockInitialRootState);
      const expected = [];

      expect(actual).toEqual(expected);
    });

    it('should return countries fetch status', () => {
      const actual = countriesSelectors.getCountriesFetchStatus(
        mockInitialRootState
      );
      const expected = FetchStatus.Initial;

      expect(actual).toEqual(expected);
    });
  });
});
