import { RouterState } from 'connected-react-router';

import { CountriesStateInterface } from '../countries/models/countries-state.interface';
import { CurrenciesStateInterface } from '../currencies/models/currencies-state.interface';
import { PlacesStateInterface } from '../places/models/places-state.interface';
import { QuotesStateInterface } from '../quotes/models/quotes-state.interface';
import { SearchFormInterface } from '../search-form/models/search-form.interface';
import { SelectedQuotesStateInterface } from '../selected-quotes/models/selected-quotes-state.interface';

export interface RootStateInterface {
  router: RouterState;
  countries?: CountriesStateInterface;
  currencies?: CurrenciesStateInterface;
  error?: unknown;
  places?: PlacesStateInterface;
  quotes: QuotesStateInterface;
  searchForm: SearchFormInterface;
  selectedQuotes: SelectedQuotesStateInterface;
}
