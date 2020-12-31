import { mockCountry } from '@white-label-airline/models/country';

import { FetchStatus } from '../models/fetch-status.enum';

import { countriesSlice } from './countries.slice';
import { initialCountriesState } from './models/countries-state.initial';

describe('Countries Slice', () => {
  it('should reset state when get countries', () => {
    const action = countriesSlice.actions.getCountries();
    const state = countriesSlice.reducer(initialCountriesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Loading,
      countries: [],
    });
  });

  it('should set state when get countries success', () => {
    const action = countriesSlice.actions.getCountriesSuccess([mockCountry]);
    const state = countriesSlice.reducer(initialCountriesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Success,
      countries: [mockCountry],
    });
  });

  it('should set state when get countries failed', () => {
    const action = countriesSlice.actions.getCountriesError();
    const state = countriesSlice.reducer(initialCountriesState, action);
    expect(state).toEqual({
      fetchStatus: FetchStatus.Error,
      countries: [],
    });
  });
});
