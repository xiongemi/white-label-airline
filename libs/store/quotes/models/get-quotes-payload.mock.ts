import { TripTypeEnum } from '@white-label-airline/store';

import { GetQuotesPayload } from './get-quotes-payload.interface';

export const mockGetQuotesPayload: GetQuotesPayload = {
  country: 'CA',
  currency: 'CAD',
  departDate: '2020-11-10',
  from: 'YTOA-sky',
  returnDate: '2020-11-13',
  to: 'NYCA-sky',
  tripType: TripTypeEnum.RoundTrip,
  isOutbound: true,
};
