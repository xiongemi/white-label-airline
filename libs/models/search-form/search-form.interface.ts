import { WlaCountry } from '../country';
import { WlaCurrency } from '../currency';
import { WlaPlace } from '../place';

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
