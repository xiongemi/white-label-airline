import { WlaTripType } from '@white-label-airline/models/search-form';

import { GetQuotesPayload } from './get-quotes-payload.interface';

export const mockGetQuotesPayload: GetQuotesPayload = {
  country: 'CA',
  currency: 'CAD',
  departDate: '2020-11-10',
  from: 'YTOA-sky',
  returnDate: '2020-11-13',
  to: 'NYCA-sky',
  tripType: WlaTripType.RoundTrip,
  isOutbound: true,
};
