import { QuotesResponseInterface } from '@white-label-airline/services/quotes';

import { FetchStatus } from '../models/fetch-status.enum';

export interface QuotesStateInterface {
  response: QuotesResponseInterface;
  fetchStatus: FetchStatus;
}
