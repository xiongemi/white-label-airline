import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { countriesSlice } from '../countries/countries.slice';
import { currenciesSlice } from '../currencies/currencies.slice';
import { errorSlice } from '../error/error.slice';
import { languageSlice } from '../language/language.slice';
import { placesSlice } from '../places/places.slice';
import { quotesSlice } from '../quotes/quotes.slice';
import { searchFormSlice } from '../search-form';
import { selectedQuotesSlice } from '../selected-quotes/selected-quotes.slice';

import { WlaRootState } from './models/root-state.interface';

export const createRootReducer = (history: History) =>
  combineReducers<WlaRootState>({
    router: connectRouter(history),
    countries: countriesSlice.reducer,
    currencies: currenciesSlice.reducer,
    error: errorSlice.reducer,
    language: languageSlice.reducer,
    places: placesSlice.reducer,
    quotes: quotesSlice.reducer,
    searchForm: searchFormSlice.reducer,
    selectedQuotes: selectedQuotesSlice.reducer,
  });
