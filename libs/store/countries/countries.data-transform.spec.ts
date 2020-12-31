import { WlaCountry } from '@white-label-airline/models/country';
import { mockCountriesResponse } from '@white-label-airline/services/countries';

import { countriesDataTransform } from './countries.data-transform';

describe('Countries Data Transform', () => {
  describe('transformCountriesResponseToCountries', () => {
    it('should transforms countries response to countries', () => {
      const actual = countriesDataTransform.transformCountriesResponseToCountries(
        mockCountriesResponse
      );
      const expected: WlaCountry[] = [
        {
          code: 'AE',
          name: 'United Arab Emirates',
        },
      ];
      expect(actual).toEqual(expected);
    });

    it('should handle null response', () => {
      const actual = countriesDataTransform.transformCountriesResponseToCountries(
        null
      );
      const expected = undefined;
      expect(actual).toEqual(expected);
    });
  });
});
