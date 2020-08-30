import { countriesActions } from './countries.slice';
import { Action } from '@reduxjs/toolkit';
import {
  ofType,
  ActionsObservable,
  StateObservable,
  Epic,
} from 'redux-observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  countriesService,
  CountriesResponse,
} from '@white-label-airline/services/countries';
import { RootState } from '../root/root-state.interface';

const getCountriesEpic: Epic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType(countriesActions.getCountries.type),
    switchMap(() => {
      return from(countriesService.getCountries()).pipe(
        map((response: CountriesResponse) =>
          countriesActions.getCountriesSuccess(response.Countries)
        ),
        catchError((error) => of(countriesActions.getCountriesError(error)))
      );
    })
  );

export const countriesEpics = [getCountriesEpic];
