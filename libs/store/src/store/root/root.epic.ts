import { combineEpics } from 'redux-observable';
import { countriesEpics } from '../countries/countries.epics';

export const rootEpic = combineEpics(...countriesEpics);
