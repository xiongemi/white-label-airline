import { initialCountriesState } from '../countries';
import { initialCurrenciesState } from '../currencies';
import { initialPlacesState } from '../places/models/places-state-initial.const';
import { initialQuotesState } from '../quotes';
import { initialSelectedQuotesState } from '../selected-quotes';

import { WlaRootState } from './root-state.interface';

export const mockInitialRootState: WlaRootState = {
  router: null,
  countries: initialCountriesState,
  currencies: initialCurrenciesState,
  error: null,
  places: initialPlacesState,
  quotes: initialQuotesState,
  searchForm: null,
  selectedQuotes: initialSelectedQuotesState,
};
