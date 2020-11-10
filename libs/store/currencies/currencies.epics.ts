import { Action } from '@reduxjs/toolkit';
import {
  CurrenciesResponseInterface,
  currenciesService,
} from '@white-label-airline/services/currencies';
import { ActionsObservable, Epic, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { errorSlice } from '../error/error.slice';

import { currenciesSlice } from './currencies.slice';

const getCurrenciesEpic: Epic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType(currenciesSlice.actions.getCurrencies.type),
    switchMap(() => {
      return from(currenciesService.getCurrencies()).pipe(
        map((response: CurrenciesResponseInterface) =>
          currenciesSlice.actions.getCurrenciesSuccess(response.Currencies)
        ),
        catchError((error) => of(errorSlice.actions.handleError(error)))
      );
    })
  );

export const currenciesEpics = [getCurrenciesEpic];
