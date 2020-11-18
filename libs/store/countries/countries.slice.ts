import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryInterface } from '@white-label-airline/services/countries';

import { FetchStatus } from '../models/fetch-status.enum';

import { initialCountriesState } from './models/countries-state.init';
import { CountriesStateInterface } from './models/countries-state.interface';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialCountriesState,
  reducers: {
    getCountries() {
      return {
        fetchStatus: FetchStatus.Loading,
        countries: [],
      };
    },
    getCountriesSuccess(_, action: PayloadAction<CountryInterface[]>) {
      return {
        fetchStatus: FetchStatus.Success,
        countries: action.payload,
      };
    },
    getCountriesError(state: CountriesStateInterface) {
      state.fetchStatus = FetchStatus.Error;
    },
  },
});
