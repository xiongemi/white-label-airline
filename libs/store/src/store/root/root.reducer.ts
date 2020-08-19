import { combineReducers } from '@reduxjs/toolkit';
import { countriesSlice } from '../countries/countries.slice';

export const rootReducer = combineReducers({
  countries: countriesSlice.reducer,
});
