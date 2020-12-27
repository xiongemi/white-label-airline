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
  isOutbound: boolean
): GetQuotesPayload => {
  return {
    country: searchForm.country.Code,
    currency: searchForm.currency.Code,
    from: searchForm.from.PlaceId,
    to: searchForm.to.PlaceId,
    departDate: formatDate(searchForm.departDate),
    returnDate: searchForm.returnDate
      ? formatDate(searchForm.returnDate)
      : null,
    tripType: searchForm.tripType,
    isOutbound,
  };
};

export const searchFormDataTransform = {
  transfromSearchFormValueToGetQuotesPayload,
};
