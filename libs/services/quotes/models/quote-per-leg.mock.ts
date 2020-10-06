import { QuotePerLegInterface } from './quote-per-leg.interface';

export const mockQuotePerLeg: QuotePerLegInterface = {
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
};
