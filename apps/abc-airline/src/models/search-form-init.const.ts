import {
  WlaSearchForm,
  WlaTripType,
} from '@white-label-airline/models/search-form';

export const initSearchForm: WlaSearchForm = {
  country: { Code: 'CA', Name: 'Canada' },
  tripType: WlaTripType.RoundTrip,
  currency: {
    Code: 'CNY',
    Symbol: '¥',
    ThousandsSeparator: ',',
    DecimalSeparator: '.',
    SymbolOnLeft: true,
    SpaceBetweenAmountAndSymbol: false,
    RoundingCoefficient: 0,
    DecimalDigits: 2,
  },
  from: null,
  departDate: new Date(),
  to: null,
  returnDate: null,
};
