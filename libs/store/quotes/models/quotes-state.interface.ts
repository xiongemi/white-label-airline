import { WlaQuotePerTrip } from '@white-label-airline/models/quotes';

import { FetchStatus } from '../../models/fetch-status.enum';

export interface WlaQuotesState {
  quotes: WlaQuotePerTrip;
  fetchStatus: FetchStatus;
}
