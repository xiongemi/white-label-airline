import { WlaCountry } from '@white-label-airline/services/countries';
import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { WlaPlace } from '@white-label-airline/services/places';

import { TripTypeEnum } from './trip-type.enum';

export interface WlaSearchForm {
  country: WlaCountry;
  tripType: TripTypeEnum;
  currency: CurrencyInterface;
  from: WlaPlace;
  departDate: Date | string;
  to: WlaPlace;
  returnDate: Date | string;
}
