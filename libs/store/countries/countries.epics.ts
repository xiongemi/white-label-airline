import { countriesActions } from './countries.slice';
import { Action } from '@reduxjs/toolkit';
import {
  ofType,
  ActionsObservable,
  StateObservable,
  Epic,
} from 'redux-observable';
import {
  map,
  catchError,
  switchMap,
  withLatestFrom,
  first,
  filter,
  tap,
} from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  countriesService,
  CountriesResponse,
} from '@white-label-airline/services/countries';
import { RootState } from '../root/root-state.interface';
import { getApiKey } from '../api';

const getCountriesEpic: Epic = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(countriesActions.getCountries.type),
    switchMap(() => state$.pipe(map(getApiKey), first(Boolean))),
    switchMap((apiKey: string) => {
      return from(countriesService.getCountries(apiKey as string)).pipe(
        map((response: CountriesResponse) =>
          countriesActions.getCountriesSuccess(response.Countries)
        ),
        catchError((error) => of(countriesActions.getCountriesError(error)))
      );
    })
  );

export const countriesEpics = [getCountriesEpic];
