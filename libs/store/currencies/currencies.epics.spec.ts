import { Action } from '@reduxjs/toolkit';
import {
  currenciesService,
  mockCurrenciesResponse,
} from '@white-label-airline/services/currencies';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import '@white-label-airline/services/i18n/i18n.service.mock';

import { errorSlice } from '../error/error.slice';

import { currenciesDataTransform } from './currencies.data-transform';
import { getCurrenciesEpic } from './currencies.epics';
import { currenciesSlice } from './currencies.slice';

jest.mock('@white-label-airline/services/currencies');

describe('Currencies Epics', () => {
  describe('getCurrenciesEpic', () => {
    let action$: ActionsObservable<Action>;

    beforeEach(() => {
      action$ = new ActionsObservable(
        of(currenciesSlice.actions.getCurrencies())
      );
    });

    it('should map to success action if service returns valid response', (done) => {
      currenciesService.getCurrencies = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockCurrenciesResponse));

      getCurrenciesEpic(action$).subscribe({
        next: (action) => {
          expect(currenciesService.getCurrencies).toHaveBeenCalled();
          expect(action).toEqual(
            currenciesSlice.actions.getCurrenciesSuccess(
              currenciesDataTransform.transformCurrenciesResponseToCurrencies(
                mockCurrenciesResponse
              )
            )
          );
          done();
        },
      });
    });

    it('should map to error action if service throws an error', (done) => {
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
