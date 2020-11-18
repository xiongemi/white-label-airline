import { TripTypeEnum } from '@white-label-airline/store';

import { QuotesQueryParams } from './quotes-query-params.interface';

export const mockQuotesQueryParams: QuotesQueryParams = {
  country: 'CA',
  currency: 'CAD',
  departDate: '2020-11-17',
  from: 'YTOA-sky',
  returnDate: '2020-11-21',
  to: 'NYCA-sky',
  tripType: TripTypeEnum.RoundTrip,
};
