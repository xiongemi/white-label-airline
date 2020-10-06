import { format, parse } from 'date-fns';
import { GetQuotesPayload } from '@white-label-airline/store';
import { mergeDeepRight, reject, isNil } from 'ramda';

import { SearchFormInterface } from './models/search-form.interface';
import { defaultSearchForm } from './models/search-form-default.const';
import { TripTypeEnum } from './models/trip-type.enum';

const dateFormat = 'yyyy-MM-dd';

const transformSearchFormValuesToGetQuotesPayload = (
  searchForm: SearchFormInterface
): GetQuotesPayload => {
  const getQuotesPayload = {
    country: searchForm.country.Code,
    currency: searchForm.currency.Code,
    from: searchForm.from.PlaceId,
    to: searchForm.to.PlaceId,
    departDate: format(searchForm.departDate, dateFormat),
  };
  if (searchForm.returnDate) {
    getQuotesPayload['returnDate'] = format(searchForm.returnDate, dateFormat);
  }
  return getQuotesPayload;
};

const transfromGetQuotesPayloadToSearchForm = (
  getQuotesPayload: GetQuotesPayload
): SearchFormInterface => {
  return mergeDeepRight(defaultSearchForm, {
    country: {
      Code: getQuotesPayload.country,
    },
    currency: {
      Code: getQuotesPayload.currency,
    },
    from: {
      PlaceId: getQuotesPayload.from,
    },
    to: {
      PlaceId: getQuotesPayload.to,
    },
    departDate: parse(getQuotesPayload.departDate, dateFormat, new Date()),
    returnDate:
      getQuotesPayload.returnDate &&
      parse(getQuotesPayload.returnDate, dateFormat, new Date()),
    tripType: getQuotesPayload.returnDate
      ? TripTypeEnum.RoundTrip
      : TripTypeEnum.OneWay,
  });
};

export const searchFormDataTransform = {
  transformSearchFormValuesToGetQuotesPayload,
  transfromGetQuotesPayloadToSearchForm,
};
