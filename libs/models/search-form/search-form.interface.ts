import { WlaCountry } from '@white-label-airline/services/countries';
import { WlaCurrency } from '@white-label-airline/services/currencies';
import { WlaPlace } from '@white-label-airline/services/places';

import { WlaTripType } from './trip-type.enum';

export interface WlaSearchForm {
  country: WlaCountry;
  tripType: WlaTripType;
  currency: WlaCurrency;
  from: WlaPlace;
  departDate: Date;
  to: WlaPlace;
  returnDate: Date;
}
