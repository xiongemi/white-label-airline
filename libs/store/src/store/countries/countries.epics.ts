import {
  getCountriesAction,
  getCountriesSuccessAction,
  getCountriesErrorAction,
} from './countries.actions';
import { Action } from '@reduxjs/toolkit';
import { ofType, ActionsObservable } from 'redux-observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { getCountriesApi } from '../../api/countries/countries.api';
import { CountryResponse } from '../../api/countries/countriy-responose.interface';

const getCountriesEpic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType(getCountriesAction.type),
    switchMap(() =>
      from(getCountriesApi()).pipe(
        map((response: CountryResponse[]) =>
          getCountriesSuccessAction(response)
        ),
        catchError((error) => of(getCountriesErrorAction(error)))
      )
    )
  );

export const countriesEpics = [getCountriesEpic];
