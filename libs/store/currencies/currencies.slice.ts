import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WlaCurrency } from '@white-label-airline/models/currency';

import { FetchStatus } from '../models/fetch-status.enum';

import { initialCurrenciesState } from './models/currencies-state.initial';
import { WlaCurrenciesState } from './models/currencies-state.interface';

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: initialCurrenciesState,
  reducers: {
    getCurrencies() {
      return {
        fetchStatus: FetchStatus.Loading,
        currencies: [],
      };
    },
    getCurrenciesSuccess(_, action: PayloadAction<WlaCurrency[]>) {
      return {
        fetchStatus: FetchStatus.Success,
        currencies: action.payload,
      };
    },
    getCurrenciesError(state: WlaCurrenciesState) {
      state.fetchStatus = FetchStatus.Error;
    },
  },
});
