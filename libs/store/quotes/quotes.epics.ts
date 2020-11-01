import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, ActionsObservable, Epic } from 'redux-observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import {
  quotesService,
  quotesDataTransfrom,
  QuotePerLegInterface,
} from '@white-label-airline/services/quotes';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';

import { errorSlice } from '../error/error.slice';

import { GetQuotesPayload, quotesSlice } from './quotes.slice';

const getQuotesEpic: Epic = (
  action$: ActionsObservable<PayloadAction<GetQuotesPayload>>
) =>
  action$.pipe(
    ofType(quotesSlice.actions.getQuotes.type),
    switchMap((action: PayloadAction<GetQuotesPayload>) => {
      const { payload }: PayloadAction<GetQuotesPayload> = action;
      return from(
        quotesService.getQuotes(
          payload.country,
          payload.currency,
          getCurrentLanguage(),
          payload.isOutbound ? payload.from : payload.to,
          payload.isOutbound ? payload.to : payload.from,
          payload.isOutbound ? payload.departDate : payload.returnDate,
          payload.returnDate
        )
      ).pipe(
        map((response) =>
          quotesDataTransfrom.transformQuotesResponseToQuotes(response)
        ),
        map((quotes: QuotePerLegInterface[]) =>
          quotesSlice.actions.getQuotesSuccess({
            quotes,
            isOutbound: payload.isOutbound,
          })
        ),
        catchError((error) =>
          from([
            errorSlice.actions.handleError(error),
            quotesSlice.actions.getQuotesError(),
          ])
        )
      );
    })
  );

export const quotesEpics = [getQuotesEpic];
