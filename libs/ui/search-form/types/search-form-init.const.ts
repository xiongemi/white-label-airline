import { SearchFormInterface } from './search-form.interface';
import { TripTypeEnum } from './trip-type.enum';

export const initSearchForm: SearchFormInterface = {
  tripType: TripTypeEnum.OneWay,
  currency: null,
  from: {
    place: null,
    date: null,
  },
  to: {
    place: null,
    date: null,
  },
};
