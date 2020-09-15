import { SearchFormInterface } from './search-form.interface';
import { TripTypeEnum } from './trip-type.enum';

export const initSearchForm: SearchFormInterface = {
  tripType: TripTypeEnum.OneWay,
  currency: null,
  from: {
    country: null,
    place: null,
    date: null,
  },
  to: {
    country: null,
    place: null,
    date: null,
  },
};
