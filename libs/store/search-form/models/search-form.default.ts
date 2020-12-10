import { WlaSearchForm } from './search-form.interface';
import { TripTypeEnum } from './trip-type.enum';

export const defaultSearchForm: WlaSearchForm = {
  country: null,
  tripType: TripTypeEnum.OneWay,
  currency: null,
  from: null,
  departDate: null,
  to: null,
  returnDate: null,
};
