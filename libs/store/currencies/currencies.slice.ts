import { createSlice } from '@reduxjs/toolkit';
import { CurrencyInterface } from '@white-label-airline/services/currencies';

const initialState: CurrencyInterface[] = [];

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    getCurrencies() {
      return [];
    },
    getCurrenciesSuccess(_, action) {
      return action.payload;
    },
  },
});
