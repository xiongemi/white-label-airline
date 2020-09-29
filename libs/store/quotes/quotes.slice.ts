import { createSlice } from '@reduxjs/toolkit';

export interface GetQuotesPayload {
  country: string;
  currency: string;
  from: string;
  to: string;
  departDate: Date;
  returnDate: Date;
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: null,
  reducers: {
    getQuotes: {
      reducer() {
        return { state: null };
      },
      prepare({
        country,
        currency,
        from,
        to,
        departDate,
        returnDate,
      }: GetQuotesPayload) {
        return {
          payload: { country, currency, from, to, departDate, returnDate },
        };
      },
    },
    getQuotesSuccess(_, action) {
      return action.payload;
    },
  },
});
