import { CountryInterface } from '@white-label-airline/services/countries';
import { CurrencyInterface } from '@white-label-airline/services/currencies';

import { PlacesStateInterface } from '../places/places-state.interface';
import { QuotesStateInterface } from '../quotes/quotes-state.interface';

export interface RootStateInterface {
  language: string;
  countries?: CountryInterface[];
  currencies?: CurrencyInterface[];
  error?: unknown;
  places?: PlacesStateInterface;
  quotes: QuotesStateInterface;
}
