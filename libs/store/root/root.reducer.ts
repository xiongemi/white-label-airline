import { combineReducers } from '@reduxjs/toolkit';

import { countriesSlice } from '../countries/countries.slice';
import { errorSlice } from '../error/error.slice';
import { languageSlice } from '../language/language.slice';
import { currenciesSlice } from '../currencies/currencies.slice';
import { placesSlice } from '../places';

import { RootState } from './root-state.interface';

export const rootReducer = combineReducers<RootState>({
  countries: countriesSlice.reducer,
  currencies: currenciesSlice.reducer,
  language: languageSlice.reducer,
  places: placesSlice.reducer,
  error: errorSlice.reducer,
});
