import {
  mockSearchForm,
  WlaTripType,
} from '@white-label-airline/models/search-form';

import { GetQuotesPayload } from '../quotes/models/get-quotes-payload.interface';

import { searchFormDataTransform } from './search-form.data-transform';

describe('Search Form Data Transform', () => {
  describe('transfromSearchFormValueToGetQuotesPayload', () => {
    it('should transforms currencies response to currencies', () => {
      const actual = searchFormDataTransform.transfromSearchFormValueToGetQuotesPayload(
        mockSearchForm,
        false
      );
      const expected: GetQuotesPayload = {
        country: 'CA',
        currency: 'CAD',
        from: 'YTOA-sky',
        to: 'NYCA-sky',
        departDate: '2020-11-23',
        returnDate: '2020-11-28',
        tripType: WlaTripType.RoundTrip,
        isOutbound: false,
      };
      expect(actual).toEqual(expected);
    });

    it('should handle null response', () => {
      const actual = searchFormDataTransform.transfromSearchFormValueToGetQuotesPayload(
        null
      );
      const expected = undefined;
      expect(actual).toEqual(expected);
    });
  });
});
