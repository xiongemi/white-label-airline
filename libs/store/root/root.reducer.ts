import { combineReducers } from '@reduxjs/toolkit';
import { countriesReducer } from '../countries/countries.slice';
import { RootState } from './root-state.interface';

export const rootReducer = combineReducers<RootState>({
  countries: countriesReducer,
});
