import { CountryInterface } from '@white-label-airline/services/countries';
import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { RouterState } from 'connected-react-router';

import { PlacesStateInterface } from '../places/places-state.interface';
import { QuotesStateInterface } from '../quotes/quotes-state.interface';
import { SearchFormInterface } from '../search-form/search-form.interface';
import { SelectedQuotesStateInterface } from '../selected-quotes/selected-quotes-state.interface';

export interface RootStateInterface {
  router: RouterState;
  countries?: CountryInterface[];
  currencies?: CurrencyInterface[];
  error?: unknown;
  places?: PlacesStateInterface;
  quotes: QuotesStateInterface;
  searchForm: SearchFormInterface;
  selectedQuotes: SelectedQuotesStateInterface;
}
