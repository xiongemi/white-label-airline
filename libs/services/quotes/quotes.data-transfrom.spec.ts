import { mockQuotesResponse } from './models/quotes-response.mock';
import { quotesDataTransfrom } from './quotes.data-transform';

describe('Quotes Data Transfrom', () => {
  test('should transform quotes response', () => {
    const actual = quotesDataTransfrom.transformQuotesResponseToQuotes(
      mockQuotesResponse
    );
    const expected = [
      {
        id: 1,
        minPrice: 273,
        direct: false,
        carriers: ['Finnair'],
        origin: {
          PlaceId: 96474,
          IataCode: 'YYZ',
          Name: 'Toronto Pearson International',
          Type: 'Station',
          SkyscannerCode: 'YYZ',
          CityName: 'Toronto',
          CityId: 'YTOA',
          CountryName: 'Canada',
        },
        destination: {
          PlaceId: 50290,
          IataCode: 'EWR',
          Name: 'New York Newark',
          Type: 'Station',
          SkyscannerCode: 'EWR',
          CityName: 'New York',
          CityId: 'NYCA',
          CountryName: 'United States',
        },
      },
      {
        id: 2,
        minPrice: 345,
        direct: true,
        carriers: ['Air Canada'],
        origin: {
          PlaceId: 96474,
          IataCode: 'YYZ',
          Name: 'Toronto Pearson International',
          Type: 'Station',
          SkyscannerCode: 'YYZ',
          CityName: 'Toronto',
          CityId: 'YTOA',
          CountryName: 'Canada',
        },
        destination: {
          PlaceId: 65633,
          IataCode: 'LGA',
          Name: 'New York LaGuardia',
          Type: 'Station',
          SkyscannerCode: 'LGA',
          CityName: 'New York',
          CityId: 'NYCA',
          CountryName: 'United States',
        },
      },
    ];
    expect(actual).toEqual(expected);
  });
});
