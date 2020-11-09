import { format, parse } from 'date-fns';
import { mergeDeepRight } from 'ramda';
import {
  TripTypeEnum,
  SearchFormInterface,
  defaultSearchForm,
} from '@white-label-airline/store';

import { QuotesQueryParams } from '../models/quotes-query-params.interface';

const dateFormat = 'yyyy-MM-dd';

const parseQueryParamsDate = (date: string): Date => {
  return parse(date, dateFormat, new Date());
};

const formatQueryParamsDate = (date: string | Date): string => {
  return typeof date === 'string'
    ? format(new Date(date), dateFormat)
    : format(date, dateFormat);
};

const transformSearchFormValuesToQuotesQueryParams = (
  searchForm: SearchFormInterface
): QuotesQueryParams => {
  const quotesQueryParams = {
    country: searchForm.country.Code,
    currency: searchForm.currency.Code,
    from: searchForm.from.PlaceId,
    to: searchForm.to.PlaceId,
    departDate: formatQueryParamsDate(searchForm.departDate),
    tripType: searchForm.tripType,
  };
  if (searchForm.tripType === TripTypeEnum.RoundTrip && searchForm.returnDate) {
    quotesQueryParams['returnDate'] = formatQueryParamsDate(
      searchForm.returnDate
    );
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
    departDate: parseQueryParamsDate(quotesQueryParams.departDate),
    returnDate:
      quotesQueryParams.returnDate &&
      parseQueryParamsDate(quotesQueryParams.returnDate),
    tripType: quotesQueryParams.tripType,
  });
};

export const searchFormDataTransform = {
  parseQueryParamsDate,
  formatQueryParamsDate,
  transformSearchFormValuesToQuotesQueryParams,
  transfromQuotesQueryParamsToSearchFormValues,
};
