import { mockCountry } from '@white-label-airline/services/countries';

import { FetchStatus } from '../models/fetch-status.enum';

import { countriesSlice } from './countries.slice';
import { initialCountriesState } from './models/countries-state.init';

describe('Countries Slice', () => {
  test('should reset state when get countries', () => {
    const action = countriesSlice.actions.getCountries();
    const state = countriesSlice.reducer(initialCountriesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Loading,
      countries: [],
    });
  });

  test('should set state when get countries success', () => {
    const action = countriesSlice.actions.getCountriesSuccess([mockCountry]);
    const state = countriesSlice.reducer(initialCountriesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Success,
      countries: [mockCountry],
    });
  });

  test('should set state when get countries failed', () => {
    const action = countriesSlice.actions.getCountriesError();
    const state = countriesSlice.reducer(initialCountriesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Error,
      countries: [],
    });
  });
});
