import { Action } from '@reduxjs/toolkit';
import { WlaCurrency } from '@white-label-airline/models/currency';
import {
  CurrenciesResponse,
  currenciesService,
} from '@white-label-airline/services/currencies';
import { ActionsObservable, Epic, ofType } from 'redux-observable';
import { from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { errorSlice } from '../error/error.slice';

import { currenciesDataTransform } from './currencies.data-transform';
import { currenciesSlice } from './currencies.slice';

export const getCurrenciesEpic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType(currenciesSlice.actions.getCurrencies.type),
    switchMap(() => {
      return from(currenciesService.getCurrencies()).pipe(
        map((response: CurrenciesResponse) =>
          currenciesDataTransform.transformCurrenciesResponseToCurrencies(
            response
          )
        ),
        map((currencies: WlaCurrency[]) =>
          currenciesSlice.actions.getCurrenciesSuccess(currencies)
        ),
        catchError((error) =>
          from([
            errorSlice.actions.handleError(error),
            currenciesSlice.actions.getCurrenciesError(),
          ])
        )
      );
    })
  );

export const currenciesEpics: Epic[] = [getCurrenciesEpic];
