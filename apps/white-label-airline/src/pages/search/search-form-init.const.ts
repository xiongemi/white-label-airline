import { SearchFormInterface, TripTypeEnum } from '@white-label-airline/store';

import { country } from './country.const';

export const initSearchForm: SearchFormInterface = {
  country,
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
