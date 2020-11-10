import { CountryInterface } from '@white-label-airline/services/countries';
import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { PlaceInterface } from '@white-label-airline/services/places';

import { TripTypeEnum } from './trip-type.enum';

export interface SearchFormInterface {
  country: CountryInterface;
  tripType: TripTypeEnum;
  currency: CurrencyInterface;
  from: PlaceInterface;
  departDate: Date | string;
  to: PlaceInterface;
  returnDate: Date | string;
}
