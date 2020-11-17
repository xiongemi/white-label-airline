import { Action } from '@reduxjs/toolkit';
import {
  CountriesResponse,
  countriesService,
} from '@white-label-airline/services/countries';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import { ActionsObservable, Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { errorSlice } from '../error/error.slice';

import { countriesSlice } from './countries.slice';

export const getCountriesEpic = (action$: ActionsObservable<Action>) =>
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

export const countriesEpics: Epic[] = [getCountriesEpic];
