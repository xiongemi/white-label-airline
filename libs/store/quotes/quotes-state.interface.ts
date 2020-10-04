import { QuotesPerTripInterface } from '@white-label-airline/services/quotes';

import { FetchStatus } from '../models/fetch-status.enum';

export interface QuotesStateInterface {
  quotes: QuotesPerTripInterface;
  fetchStatus: FetchStatus;
}
