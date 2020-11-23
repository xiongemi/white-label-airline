import { CurrencyInterface } from '@white-label-airline/services/currencies';

import { FetchStatus } from '../../models/fetch-status.enum';

export interface CurrenciesStateInterface {
  fetchStatus: FetchStatus;
  currencies: CurrencyInterface[];
}