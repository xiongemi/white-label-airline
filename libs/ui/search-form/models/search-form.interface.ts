import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { PlaceInterface } from '@white-label-airline/services/places/place.interface';
import { CountryInterface } from '@white-label-airline/services/countries';

import { TripTypeEnum } from './trip-type.enum';

export interface SearchFormInterface {
  country: CountryInterface;
  tripType: TripTypeEnum;
  currency: CurrencyInterface;
  from: PlaceInterface;
  departDate: Date;
  to: PlaceInterface;
  returnDate: Date;
}
