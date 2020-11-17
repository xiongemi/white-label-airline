import { mockCurrency } from '@white-label-airline/services/currencies';

import { currenciesSlice } from './currencies.slice';

describe('Currencies Slice', () => {
  test('should reset state when get currencies', () => {
    const action = currenciesSlice.actions.getCurrencies();
    const state = currenciesSlice.reducer([mockCurrency], action);
    expect(state).toEqual([]);
  });

  test('should set state when get currencies success', () => {
    const action = currenciesSlice.actions.getCurrenciesSuccess([mockCurrency]);
    const state = currenciesSlice.reducer([], action);
    expect(state).toEqual([mockCurrency]);
  });
});
