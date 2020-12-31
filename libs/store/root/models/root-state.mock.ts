import { initialCountriesState } from '../../countries/models/countries-state.initial';
import { initialCurrenciesState } from '../../currencies/models/currencies-state.initial';
import { initialPlacesState } from '../../places/models/places-state.initial';
import { initialQuotesState } from '../../quotes/models/quotes-state.initial';
import { initialSelectedQuotesState } from '../../selected-quotes/models/selected-quotes-state.initial';

import { WlaRootState } from './root-state.interface';

export const mockInitialRootState: WlaRootState = {
  router: null,
  countries: initialCountriesState,
  currencies: initialCurrenciesState,
  error: null,
  language: null,
  places: initialPlacesState,
  quotes: initialQuotesState,
  searchForm: null,
  selectedQuotes: initialSelectedQuotesState,
};
