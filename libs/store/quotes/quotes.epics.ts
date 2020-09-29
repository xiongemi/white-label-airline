import { PayloadAction } from '@reduxjs/toolkit';
import {
  ofType,
  ActionsObservable,
  Epic,
  StateObservable,
} from 'redux-observable';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  quotesService,
  QuotesResponseInterface,
} from '@white-label-airline/services/quotes';

import { errorSlice } from '../error/error.slice';
import { RootState } from '../root/root-state.interface';
import { languageSelectors } from '../language/language.selectors';

import { GetQuotesPayload, quotesSlice } from './quotes.slice';

const getQuotesEpic: Epic = (
  action$: ActionsObservable<PayloadAction<GetQuotesPayload>>,
  states$: StateObservable<RootState>
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
          payload.from,
          payload.to,
          payload.departDate,
          payload.returnDate
        )
      ).pipe(
        map((response: QuotesResponseInterface) =>
          quotesSlice.actions.getQuotesSuccess(response)
        ),
        catchError((error) => of(errorSlice.actions.handleError(error)))
      );
    })
  );

export const quotesEpics = [getQuotesEpic];
