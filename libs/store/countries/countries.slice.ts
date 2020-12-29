import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WlaCountry } from '@white-label-airline/models/country';

import { FetchStatus } from '../models/fetch-status.enum';

import { initialCountriesState } from './models/countries-state.initial';
import { WlaCountriesState } from './models/countries-state.interface';

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
    getCountriesSuccess(_, action: PayloadAction<WlaCountry[]>) {
      return {
        fetchStatus: FetchStatus.Success,
        countries: action.payload,
      };
    },
    getCountriesError(state: WlaCountriesState) {
      state.fetchStatus = FetchStatus.Error;
    },
  },
});
