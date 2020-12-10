import { WlaSearchForm } from './search-form.interface';
import { TripTypeEnum } from './trip-type.enum';

export const mockSearchForm: WlaSearchForm = {
  country: { Code: 'CA', Name: 'Canada' },
  tripType: TripTypeEnum.RoundTrip,
  currency: {
    Code: 'CAD',
    DecimalDigits: 2,
    DecimalSeparator: '.',
    RoundingCoefficient: 0,
    SpaceBetweenAmountAndSymbol: false,
    Symbol: 'C$',
    SymbolOnLeft: true,
    ThousandsSeparator: ',',
  },
  from: {
    PlaceId: 'YTOA-sky',
    PlaceName: 'Toronto',
    CountryId: 'CA-sky',
    RegionId: '',
    CityId: 'YTOA-sky',
    CountryName: 'Canada',
  },
  departDate: '2020-11-24T03:19:00.000Z',
  to: {
    PlaceId: 'NYCA-sky',
    PlaceName: 'New York',
    CountryId: 'US-sky',
    RegionId: 'NY',
    CityId: 'NYCA-sky',
    CountryName: 'United States',
  },
  returnDate: '2020-11-29T03:19:00.000Z',
};
