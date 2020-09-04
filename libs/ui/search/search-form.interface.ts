import { Currency } from '@white-label-airline/services/currencies';
import { Place } from '@white-label-airline/services/places/place.interface';
import { Country } from '@white-label-airline/services/countries/country.interface';

export enum SearchTripType {
  oneWay,
  roundTrip,
}

export interface SearchForm {
  tripType: SearchTripType;
  locale: string;
  currency: Currency;
  from: {
    country: Country;
    place: Place;
    date: Date;
  };
  to: {
    country: Country;
    place: Place;
    date: Date;
  };
}


