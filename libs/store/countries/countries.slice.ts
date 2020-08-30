import { createSlice } from '@reduxjs/toolkit';
import { getCountriesError } from './countries.actions';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {
    getCountries(state) {
      state = [];
    },
    getCountriesSuccess(state, action) {
      return action.payload;
    },
  },
});

export const countriesActions = {
  ...countriesSlice.actions,
  getCountriesError,
};

export const countriesReducer = countriesSlice.reducer;
