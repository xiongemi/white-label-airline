import { Action } from '@reduxjs/toolkit';
import {
  CountriesResponse,
  countriesService,
} from '@white-label-airline/services/countries';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import {
  ActionsObservable,
  Epic,
  StateObservable,
  ofType,
} from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { errorSlice } from '../error/error.slice';
import { RootStateInterface } from '../root';

import { countriesSlice } from './countries.slice';

const getCountriesEpic: Epic = (
  action$: ActionsObservable<Action>,
  states$: StateObservable<RootStateInterface>
) =>
  action$.pipe(
    ofType(countriesSlice.actions.getCountries.type),
    switchMap(() => {
      return from(countriesService.getCountries(getCurrentLanguage())).pipe(
        map((response: CountriesResponse) =>
          countriesSlice.actions.getCountriesSuccess(response.Countries)
        ),
        catchError((error) => of(errorSlice.actions.handleError(error)))
      );
    })
  );

export const countriesEpics = [getCountriesEpic];
