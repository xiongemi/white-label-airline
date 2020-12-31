import { mockCurrency } from '@white-label-airline/models/currency';

import { FetchStatus } from '../models/fetch-status.enum';

import { currenciesSlice } from './currencies.slice';
import { initialCurrenciesState } from './models/currencies-state.initial';

describe('Currencies Slice', () => {
  it('should reset state when get currencies', () => {
    const action = currenciesSlice.actions.getCurrencies();
    const state = currenciesSlice.reducer(initialCurrenciesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Loading,
      currencies: [],
    });
  });

  it('should set state when get currencies success', () => {
    const action = currenciesSlice.actions.getCurrenciesSuccess([mockCurrency]);
    const state = currenciesSlice.reducer(initialCurrenciesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Success,
      currencies: [mockCurrency],
    });
  });

  it('should set state when get currencies failed', () => {
    const action = currenciesSlice.actions.getCurrenciesError();
    const state = currenciesSlice.reducer(initialCurrenciesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Error,
      currencies: [],
    });
  });
});
