import { CountryInterface } from '@white-label-airline/services/countries';
import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { PlaceInterface } from '@white-label-airline/services/places';
import { QuotesResponseInterface } from '@white-label-airline/services/quotes';

export interface RootState {
  language: string;
  countries?: CountryInterface[];
  currencies?: CurrencyInterface[];
  error?: unknown;
  places?: { query: string; results: PlaceInterface[] };
  quotes: QuotesResponseInterface;
}
