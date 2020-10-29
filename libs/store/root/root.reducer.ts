import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { countriesSlice } from '../countries/countries.slice';
import { errorSlice } from '../error/error.slice';
import { currenciesSlice } from '../currencies/currencies.slice';
import { placesSlice } from '../places/places.slice';
import { quotesSlice } from '../quotes/quotes.slice';
import { selectedQuotesSlice } from '../selected-quotes/selected-quotes.slice';

import { RootStateInterface } from './root-state.interface';

export const createRootReducer = (history: History) =>
  combineReducers<RootStateInterface>({
    router: connectRouter(history),
    countries: countriesSlice.reducer,
    currencies: currenciesSlice.reducer,
    places: placesSlice.reducer,
    error: errorSlice.reducer,
    quotes: quotesSlice.reducer,
    selectedQuotes: selectedQuotesSlice.reducer,
  });
