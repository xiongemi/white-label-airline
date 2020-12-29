import { WlaCurrency } from '@white-label-airline/models/currency';

import { FetchStatus } from '../../models/fetch-status.enum';

export interface WlaCurrenciesState {
  fetchStatus: FetchStatus;
  currencies: WlaCurrency[];
}
