import { Action } from '@reduxjs/toolkit';
import { ofType, ActionsObservable, Epic } from 'redux-observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  currenciesService,
  CurrenciesResponseInterface,
} from '@white-label-airline/services/currencies';

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
