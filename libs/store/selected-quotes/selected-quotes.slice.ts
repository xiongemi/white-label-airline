import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';

import { initialSelectedQuotesState } from './models/selected-quotes-state.initial';

export const selectedQuotesSlice = createSlice({
  name: 'quotes',
  initialState: initialSelectedQuotesState,
  reducers: {
    selectOutboundQuote: {
      reducer(state, action: PayloadAction<WlaQuotePerLeg>) {
        state.outbound = action.payload;
      },
      prepare(payload: WlaQuotePerLeg) {
        return {
          payload,
        };
      },
    },
    selectInboundQuote: {
      reducer(state, action: PayloadAction<WlaQuotePerLeg>) {
        state.inbound = action.payload;
      },
      prepare(payload: WlaQuotePerLeg) {
        return {
          payload,
        };
      },
    },
    reset() {
      return initialSelectedQuotesState;
    },
  },
});
