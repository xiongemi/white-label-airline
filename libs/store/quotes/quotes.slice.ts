import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FetchStatus } from '../models/fetch-status.enum';

import { GetQuotesPayload } from './models/get-quotes-payload.interface';
import { GetQuotesSuccessPayload } from './models/get-quotes-success-payload.interface';
import { initialQuotesState } from './models/quotes-state.initial';
import { QuotesStateInterface } from './models/quotes-state.interface';

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: initialQuotesState,
  reducers: {
    getQuotes: {
      reducer() {
        return {
          quotes: {},
          fetchStatus: FetchStatus.Loading,
        };
      },
      prepare(payload: GetQuotesPayload) {
        return {
          payload,
        };
      },
    },
    getQuotesSuccess(
      state: QuotesStateInterface,
      action: PayloadAction<GetQuotesSuccessPayload>
    ) {
      if (action.payload.isOutbound) {
        state.quotes.outbound = action.payload.quotes;
      } else {
        state.quotes.inbound = action.payload.quotes;
      }
      state.fetchStatus = FetchStatus.Success;
    },
    getQuotesError(state) {
      state.fetchStatus = FetchStatus.Error;
    },
  },
});
