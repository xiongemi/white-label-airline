import { mockCountry } from '@white-label-airline/services/countries';

import { countriesSlice } from './countries.slice';

describe('Countries Slice', () => {
  test('should reset state when get countries', () => {
    const action = countriesSlice.actions.getCountries();
    const state = countriesSlice.reducer([mockCountry], action);
    expect(state).toEqual([]);
  });

  test('should set state when get countries success', () => {
    const action = countriesSlice.actions.getCountriesSuccess([mockCountry]);
    const state = countriesSlice.reducer([], action);
    expect(state).toEqual([mockCountry]);
  });
});
