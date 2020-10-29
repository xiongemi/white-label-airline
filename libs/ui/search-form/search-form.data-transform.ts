import { format, parse } from 'date-fns';
import { mergeDeepRight } from 'ramda';

import { QuotesQueryParams } from '../models/quotes-query-params.interface';

import { SearchFormInterface } from './models/search-form.interface';
import { defaultSearchForm } from './models/search-form-default.const';
import { TripTypeEnum } from './models/trip-type.enum';

const dateFormat = 'yyyy-MM-dd';

const transformSearchFormValuesToQuotesQueryParams = (
  searchForm: SearchFormInterface
): QuotesQueryParams => {
  const quotesQueryParams = {
    country: searchForm.country.Code,
    currency: searchForm.currency.Code,
    from: searchForm.from.PlaceId,
    to: searchForm.to.PlaceId,
    departDate:
      typeof searchForm.departDate === 'string'
        ? format(new Date(searchForm.departDate), dateFormat)
        : format(searchForm.departDate, dateFormat),
    tripType: searchForm.tripType,
  };
  if (searchForm.tripType === TripTypeEnum.RoundTrip && searchForm.returnDate) {
    quotesQueryParams['returnDate'] =
      typeof searchForm.returnDate === 'string'
        ? format(new Date(searchForm.returnDate), dateFormat)
        : format(searchForm.returnDate, dateFormat);
  }
  return quotesQueryParams;
};

const transfromQuotesQueryParamsToSearchFormValues = (
  quotesQueryParams: QuotesQueryParams
): SearchFormInterface => {
  return mergeDeepRight(defaultSearchForm, {
    country: {
      Code: quotesQueryParams.country,
    },
    currency: {
      Code: quotesQueryParams.currency,
    },
    from: {
      PlaceId: quotesQueryParams.from,
    },
    to: {
      PlaceId: quotesQueryParams.to,
    },
    departDate: parse(quotesQueryParams.departDate, dateFormat, new Date()),
    returnDate:
      quotesQueryParams.returnDate &&
      parse(quotesQueryParams.returnDate, dateFormat, new Date()),
    tripType: quotesQueryParams.tripType,
  });
};

export const searchFormDataTransform = {
  transformSearchFormValuesToQuotesQueryParams,
  transfromQuotesQueryParamsToSearchFormValues,
};
