import { WlaQuotePerTrip } from '@white-label-airline/services/quotes';

import { FetchStatus } from '../../models/fetch-status.enum';

export interface WlaQuotesState {
  quotes: WlaQuotePerTrip;
  fetchStatus: FetchStatus;
}
