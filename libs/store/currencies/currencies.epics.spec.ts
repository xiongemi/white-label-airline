/* eslint-disable import/first */
jest.mock('@white-label-airline/services/currencies');
import { Action } from '@reduxjs/toolkit';
import {
  currenciesService,
  mockCurrenciesResponse,
} from '@white-label-airline/services/currencies';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import '@white-label-airline/services/i18n/i18n.mock';

import { errorSlice } from '../error/error.slice';

import { getCurrenciesEpic } from './currencies.epics';
import { currenciesSlice } from './currencies.slice';

describe('Currencies Epics', () => {
  describe('getCurrenciesEpic', () => {
    let action$: ActionsObservable<Action>;

    beforeEach(() => {
      action$ = new ActionsObservable(
        of(currenciesSlice.actions.getCurrencies())
      );
    });

    test('should map to success action if service returns valid response', (done) => {
      currenciesService.getCurrencies = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockCurrenciesResponse));

      getCurrenciesEpic(action$).subscribe({
        next: (action) => {
          expect(currenciesService.getCurrencies).toHaveBeenCalled();
          expect(action).toEqual(
            currenciesSlice.actions.getCurrenciesSuccess(
              mockCurrenciesResponse.Currencies
            )
          );
          done();
        },
      });
    });

    test('should map to success action if service returns valid response', (done) => {
      const mockError = new Error('random error');
      currenciesService.getCurrencies = jest
        .fn()
        .mockImplementation(() => Promise.reject(mockError));

      getCurrenciesEpic(action$).subscribe({
        next: (action) => {
          expect(action).toEqual(errorSlice.actions.handleError(mockError));
          done();
        },
      });
    });
  });
});
