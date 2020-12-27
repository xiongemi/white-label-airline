import {
  WlaSearchForm,
  WlaTripType,
} from '@white-label-airline/models/search-form';

export const initSearchForm: WlaSearchForm = {
  country: { Code: 'CA', Name: 'Canada' },
  tripType: WlaTripType.RoundTrip,
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
