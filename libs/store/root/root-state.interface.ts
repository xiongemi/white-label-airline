import { CountryInterface } from '@white-label-airline/services/countries';
import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { PlaceInterface } from '@white-label-airline/services/places/place.interface';

export interface RootState {
  language: string;
  countries?: CountryInterface[];
  currencies?: CurrencyInterface[];
  error?: unknown;
  places?: { query: string; results: PlaceInterface[] };
}
