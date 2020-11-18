import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyInterface } from '@white-label-airline/services/currencies';

import { FetchStatus } from '../models/fetch-status.enum';

import { initialCurrenciesState } from './models/currencies-state.init';
import { CurrenciesStateInterface } from './models/currencies-state.interface';

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
    getCurrenciesSuccess(_, action: PayloadAction<CurrencyInterface[]>) {
      return {
        fetchStatus: FetchStatus.Success,
        currencies: action.payload,
      };
    },
    getCurrenciesError(state: CurrenciesStateInterface) {
      state.fetchStatus = FetchStatus.Error;
    },
  },
});
