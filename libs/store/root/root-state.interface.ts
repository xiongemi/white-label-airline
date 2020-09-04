import { Country } from '@white-label-airline/services/countries';
import { Currency } from '@white-label-airline/services/currencies';
import { Place } from '@white-label-airline/services/places/place.interface';

export interface RootState {
  language: string;
  countries?: Country[];
  currencies?: Currency[];
  error?: unknown;
  places?: Place[];
}
