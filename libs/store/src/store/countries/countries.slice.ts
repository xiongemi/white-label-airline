import { createSlice, Action } from '@reduxjs/toolkit';
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
