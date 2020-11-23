/* eslint-disable import/first */
jest.mock('@white-label-airline/services/places');
import { PayloadAction } from '@reduxjs/toolkit';
import {
  quotesService,
  mockQuotesResponse,
  quotesDataTransfrom,
} from '@white-label-airline/services/quotes';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import '@white-label-airline/services/i18n/i18n.mock';

import { errorSlice } from '../error/error.slice';

import { GetQuotesPayload } from './models/get-quotes-payload.interface';
import { mockGetQuotesPayload } from './models/get-quotes-payload.mock';
import { getQuotesEpic } from './quotes.epics';
import { quotesSlice } from './quotes.slice';

describe('Quotes Epics', () => {
  describe('getQuotesEpic', () => {
    let action$: ActionsObservable<PayloadAction<GetQuotesPayload>>;

    beforeEach(() => {
      action$ = new ActionsObservable(
        of(quotesSlice.actions.getQuotes(mockGetQuotesPayload))
      );
    });

    it('should map to success action if service returns valid response', (done) => {
      quotesService.getQuotes = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockQuotesResponse));

      getQuotesEpic(action$).subscribe({
        next: (action) => {
          expect(quotesService.getQuotes).toHaveBeenCalled();
          expect(action).toEqual(
            quotesSlice.actions.getQuotesSuccess({
              quotes: quotesDataTransfrom.transformQuotesResponseToQuotes(
                mockQuotesResponse
              ),
              isOutbound: mockGetQuotesPayload.isOutbound,
            })
          );
          done();
        },
      });
    });

    it('should map to error action if service throws an error', (done) => {
      const mockError = new Error('random error');
      quotesService.getQuotes = jest
        .fn()
        .mockImplementation(() => Promise.reject(mockError));

      getQuotesEpic(action$).subscribe({
        next: (action) => {
          expect(action).toEqual(errorSlice.actions.handleError(mockError));
          done();
        },
      });
    });
  });
});
