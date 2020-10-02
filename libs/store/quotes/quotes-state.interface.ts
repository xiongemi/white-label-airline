import { QuotesPerTrip } from '@white-label-airline/services/quotes';

import { FetchStatus } from '../models/fetch-status.enum';

export interface QuotesStateInterface {
  quotes: QuotesPerTrip;
  fetchStatus: FetchStatus;
}
