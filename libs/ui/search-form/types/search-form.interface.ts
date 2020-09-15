import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { PlaceInterface } from '@white-label-airline/services/places/place.interface';
import { CountryInterface } from '@white-label-airline/services/countries/country.interface';

import { TripTypeEnum } from './trip-type.enum';

export interface SearchFormInterface {
  tripType: TripTypeEnum;
  currency: CurrencyInterface;
  from: {
    country: CountryInterface;
    place: PlaceInterface;
    date: Date;
  };
  to: {
    country: CountryInterface;
    place: PlaceInterface;
    date: Date;
  };
}
