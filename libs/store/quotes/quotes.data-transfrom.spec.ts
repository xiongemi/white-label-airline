import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';
import { mockQuotesResponse } from '@white-label-airline/services/quotes';

import { quotesDataTransfrom } from './quotes.data-transform';

describe('Quotes Data Transfrom', () => {
  it('should transform quotes response', () => {
    const actual = quotesDataTransfrom.transformQuotesResponseToQuotes(
      mockQuotesResponse
    );
    const expected: WlaQuotePerLeg[] = [
      {
        id: 1,
        minPrice: 273,
        direct: false,
        carriers: ['Finnair'],
        origin: {
          id: 96474,
          code: 'YYZ',
          name: 'Toronto Pearson International',
          cityName: 'Toronto',
        },
        destination: {
          id: 50290,
          code: 'EWR',
          name: 'New York Newark',
          cityName: 'New York',
        },
      },
      {
        id: 2,
        minPrice: 345,
        direct: true,
        carriers: ['Air Canada'],
        origin: {
          id: 96474,
          code: 'YYZ',
          name: 'Toronto Pearson International',
          cityName: 'Toronto',
        },
        destination: {
          id: 65633,
          code: 'LGA',
          name: 'New York LaGuardia',
          cityName: 'New York',
        },
      },
    ];
    expect(actual).toEqual(expected);
  });

  it('should handle null response', () => {
    const actual = quotesDataTransfrom.transformQuotesResponseToQuotes(null);
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
});
