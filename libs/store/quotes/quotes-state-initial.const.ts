import { FetchStatus } from '../models/fetch-status.enum';

import { QuotesStateInterface } from './quotes-state.interface';

export const initialQuotesState: QuotesStateInterface = {
  response: null,
  fetchStatus: FetchStatus.Initial,
};
