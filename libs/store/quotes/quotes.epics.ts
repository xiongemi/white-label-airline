import { PayloadAction } from '@reduxjs/toolkit';
import {
  ofType,
  ActionsObservable,
  Epic,
  StateObservable,
} from 'redux-observable';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import {
  quotesService,
  quotesDataTransfrom,
  QuotePerLegInterface,
} from '@white-label-airline/services/quotes';

import { errorSlice } from '../error/error.slice';
import { RootStateInterface } from '../root/root-state.interface';
import { languageSelectors } from '../language/language.selectors';

import { GetQuotesPayload, quotesSlice } from './quotes.slice';

const getQuotesEpic: Epic = (
  action$: ActionsObservable<PayloadAction<GetQuotesPayload>>,
  states$: StateObservable<RootStateInterface>
) =>
  action$.pipe(
    ofType(quotesSlice.actions.getQuotes.type),
    withLatestFrom(states$.pipe(map(languageSelectors.getLanguage))),
    switchMap(([action, language]) => {
      const { payload }: PayloadAction<GetQuotesPayload> = action;
      return from(
        quotesService.getQuotes(
          payload.country,
          payload.currency,
          language,
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
