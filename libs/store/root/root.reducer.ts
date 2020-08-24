import { combineReducers } from '@reduxjs/toolkit';
import { countriesSlice } from '../countries/countries.slice';
import { apiSlice } from '../api/api.slice';

export const rootReducer = combineReducers({
  countries: countriesSlice.reducer,
  api: apiSlice.reducer,
});
