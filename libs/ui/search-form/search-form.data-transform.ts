import { format } from 'date-fns';
import { GetQuotesPayload } from '@white-label-airline/store';

import { SearchFormInterface } from './models/search-form.interface';

const transformSearchFormValuesToGetQuotesPayload = (
  searchForm: SearchFormInterface
): GetQuotesPayload => {
  return {
    country: searchForm.country.Code,
    currency: searchForm.currency.Code,
    from: searchForm.from.PlaceId,
    to: searchForm.to.PlaceId,
    departDate: format(searchForm.departDate, 'yyyy-MM-dd'),
    returnDate:
      searchForm.returnDate && format(searchForm.returnDate, 'yyyy-MM-dd'),
    isOutbound: true,
  };
};

export const searchFormDataTransform = {
  transformSearchFormValuesToGetQuotesPayload,
};
