import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {
    getCountries() {
      return [];
    },
    getCountriesSuccess(_, action) {
      return action.payload;
    },
  },
});
