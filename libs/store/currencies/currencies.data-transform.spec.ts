import { WlaCurrency } from '@white-label-airline/models/currency';
import { mockCurrenciesResponse } from '@white-label-airline/services/currencies';

import { currenciesDataTransform } from './currencies.data-transform';

describe('Currencies Data Transform', () => {
  describe('transformCurrenciesResponseToCurrencies', () => {
    it('should transforms currencies response to currencies', () => {
      const actual = currenciesDataTransform.transformCurrenciesResponseToCurrencies(
        mockCurrenciesResponse
      );
      const expected: WlaCurrency[] = [
        {
          code: 'ZAR',
        },
      ];
      expect(actual).toEqual(expected);
    });

    it('should handle null response', () => {
      const actual = currenciesDataTransform.transformCurrenciesResponseToCurrencies(
        null
      );
      const expected = undefined;
      expect(actual).toEqual(expected);
    });
  });
});
