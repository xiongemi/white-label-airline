import { Action } from '@reduxjs/toolkit';
import {
  ofType,
  ActionsObservable,
  Epic,
  StateObservable,
} from 'redux-observable';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  countriesService,
  CountriesResponse,
} from '@white-label-airline/services/countries';

import { languageSelectors } from '../language/language.selectors';
import { RootState } from '../root';
import { errorSlice } from '../error/error.slice';

import { countriesSlice } from './countries.slice';

const getCountriesEpic: Epic = (
  action$: ActionsObservable<Action>,
  states$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(countriesSlice.actions.getCountries.type),
    withLatestFrom(states$.pipe(map(languageSelectors.getLanguage))),
    switchMap(([_, language]) => {
      return from(countriesService.getCountries(language)).pipe(
        map((response: CountriesResponse) =>
          countriesSlice.actions.getCountriesSuccess(response.Countries)
        ),
        catchError((error) => of(errorSlice.actions.handleError(error)))
      );
    })
  );

export const countriesEpics = [getCountriesEpic];
