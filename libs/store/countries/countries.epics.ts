import { Action } from '@reduxjs/toolkit';
import { WlaCountry } from '@white-label-airline/models/country';
import {
  CountriesResponse,
  countriesService,
} from '@white-label-airline/services/countries';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import { ActionsObservable, Epic, ofType } from 'redux-observable';
import { from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { errorSlice } from '../error/error.slice';

import { countriesDataTransform } from './countries.data-transform';
import { countriesSlice } from './countries.slice';

export const getCountriesEpic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType(countriesSlice.actions.getCountries.type),
    switchMap(() => {
      return from(countriesService.getCountries(getCurrentLanguage())).pipe(
        map((response: CountriesResponse) =>
          countriesDataTransform.transformCountriesResponseToCountries(response)
        ),
        map((countries: WlaCountry[]) =>
          countriesSlice.actions.getCountriesSuccess(countries)
        ),
        catchError((error) =>
          from([
            countriesSlice.actions.getCountriesError(),
            errorSlice.actions.handleError(error),
          ])
        )
      );
    })
  );

export const countriesEpics: Epic[] = [getCountriesEpic];
