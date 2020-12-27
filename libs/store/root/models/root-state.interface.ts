import { WlaSearchForm } from '@white-label-airline/models/search-form';
import { WlaSelectedQuotes } from '@white-label-airline/models/selected-quotes';
import { RouterState } from 'connected-react-router';

import { WlaCountriesState } from '../../countries/models/countries-state.interface';
import { WlaCurrenciesState } from '../../currencies/models/currencies-state.interface';
import { WlaPlacesState } from '../../places/models/places-state.interface';
import { WlaQuotesState } from '../../quotes/models/quotes-state.interface';

export interface WlaRootState {
  router: RouterState;
  countries?: WlaCountriesState;
  currencies?: WlaCurrenciesState;
  error?: string | Error;
  language?: string;
  places?: WlaPlacesState;
  quotes: WlaQuotesState;
  searchForm: WlaSearchForm;
  selectedQuotes: WlaSelectedQuotes;
}
