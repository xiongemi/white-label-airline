import { Action } from '@reduxjs/toolkit';
import {
  ofType,
  ActionsObservable,
  Epic,
  StateObservable,
} from 'redux-observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  countriesService,
  CountriesResponse,
} from '@white-label-airline/services/countries';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';

import { RootStateInterface } from '../root';
import { errorSlice } from '../error/error.slice';

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
