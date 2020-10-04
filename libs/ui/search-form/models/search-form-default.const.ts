import { SearchFormInterface, TripTypeEnum } from '@white-label-airline/store';

export const defaultSearchForm: SearchFormInterface = {
  country: null,
  tripType: TripTypeEnum.OneWay,
  currency: null,
  from: null,
  departDate: null,
  to: null,
  returnDate: null,
};
