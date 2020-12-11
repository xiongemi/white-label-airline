import { WlaCurrency } from '@white-label-airline/services/currencies';

import { FetchStatus } from '../../models/fetch-status.enum';

export interface WlaCurrenciesState {
  fetchStatus: FetchStatus;
  currencies: WlaCurrency[];
}
