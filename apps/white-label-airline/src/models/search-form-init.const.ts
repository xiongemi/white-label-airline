import {
  SearchFormInterface,
  TripTypeEnum,
} from '@white-label-airline/ui/search-form';

export const initSearchForm: SearchFormInterface = {
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
  from: null,
  departDate: new Date(),
  to: null,
  returnDate: null,
};
