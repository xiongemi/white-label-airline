import { WlaQuotePerLeg } from './quote-per-leg.interface';

export const mockQuotePerLeg: WlaQuotePerLeg = {
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
};
