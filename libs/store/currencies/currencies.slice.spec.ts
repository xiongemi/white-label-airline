import { mockCurrency } from '@white-label-airline/services/currencies';

import { FetchStatus } from '../models/fetch-status.enum';

import { currenciesSlice } from './currencies.slice';
import { initialCurrenciesState } from './models/currencies-state.init';

describe('Currencies Slice', () => {
  test('should reset state when get currencies', () => {
    const action = currenciesSlice.actions.getCurrencies();
    const state = currenciesSlice.reducer(initialCurrenciesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Loading,
      currencies: [],
    });
  });

  test('should set state when get currencies success', () => {
    const action = currenciesSlice.actions.getCurrenciesSuccess([mockCurrency]);
    const state = currenciesSlice.reducer(initialCurrenciesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Success,
      currencies: [mockCurrency],
    });
  });

  test('should set state when get currencies failed', () => {
    const action = currenciesSlice.actions.getCurrenciesError();
    const state = currenciesSlice.reducer(initialCurrenciesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Error,
      currencies: [],
    });
  });
});
