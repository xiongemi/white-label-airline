import { SearchFormInterface } from './search-form.interface';
import { TripTypeEnum } from './trip-type.enum';

export const defaultSearchForm: SearchFormInterface = {
  country: null,
  tripType: TripTypeEnum.OneWay,
  currency: null,
  from: null,
  departDate: null,
  to: null,
  returnDate: null,
};
