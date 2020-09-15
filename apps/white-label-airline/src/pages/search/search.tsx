import React from 'react';

import SearchForm, {
  SearchFormInterface,
} from '@white-label-airline/ui/search-form';
import { TripTypeEnum } from '@white-label-airline/ui/search-form/types/trip-type.enum';

const initSearchForm: SearchFormInterface = {
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
    country: { Code: 'CA', Name: 'Canada' },
    date: new Date(),
    place: null,
  },
  to: {
    country: null,
    date: null,
    place: null,
  },
};

const Search: React.FunctionComponent<{}> = () => {
  return <SearchForm initSearchForm={initSearchForm} />;
};

export default Search;
