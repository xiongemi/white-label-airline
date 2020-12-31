import { WlaSearchForm } from '@white-label-airline/models/search-form';
import { GetQuotesPayload } from '@white-label-airline/store/quotes';
import { format } from 'date-fns';

const dateFormat = 'yyyy-MM-dd';

const formatDate = (date: string | Date): string => {
  return typeof date === 'string'
    ? format(new Date(date), dateFormat)
    : format(date, dateFormat);
};

const transfromSearchFormValueToGetQuotesPayload = (
  searchForm: WlaSearchForm,
  isOutbound = true
): GetQuotesPayload => {
  return searchForm
    ? {
        country: searchForm.country.code,
        currency: searchForm.currency.code,
        from: searchForm.from.id,
        to: searchForm.to.id,
        departDate: formatDate(searchForm.departDate),
        returnDate: searchForm.returnDate
          ? formatDate(searchForm.returnDate)
          : undefined,
        tripType: searchForm.tripType,
        isOutbound,
      }
    : undefined;
};

export const searchFormDataTransform = {
  transfromSearchFormValueToGetQuotesPayload,
};
