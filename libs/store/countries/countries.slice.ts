import { createSlice } from '@reduxjs/toolkit';
import { getCountriesError } from './countries.actions';

export const countriesSlice = createSlice({
  name: 'countires',
  initialState: [],
  reducers: {
    getCountries(state) {
      state = [];
    },
    getCountriesSuccess(state, action) {
      state = action.payload;
    },
  },
});

export const countriesActions = {
  ...countriesSlice.actions,
  getCountriesError,
};
