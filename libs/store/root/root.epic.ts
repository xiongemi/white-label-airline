import { combineEpics } from 'redux-observable';
import { countriesEpics } from '../countries/countries.epics';
import { currenciesEpics } from '../currencies/currencies.epics';
import { placesEpics } from '../places/places.epics';

export const rootEpic = combineEpics(
  ...countriesEpics,
  ...currenciesEpics,
  ...placesEpics
);
