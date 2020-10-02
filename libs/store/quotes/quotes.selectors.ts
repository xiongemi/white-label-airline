import {
  QuotePerLegInterface,
  QuotesPerTrip,
} from '@white-label-airline/services/quotes';

import { RootState } from '../root';
import { FetchStatus } from '../models/fetch-status.enum';

import { QuotesStateInterface } from './quotes-state.interface';

const getQuotesState = (rootState: RootState): QuotesStateInterface =>
  rootState.quotes;

const getQuotesFetchStatus = (rootState: RootState): FetchStatus =>
  getQuotesState(rootState).fetchStatus;

const getQuotes = (rootState: RootState): QuotesPerTrip =>
  getQuotesState(rootState).quotes;

const getOutboundQuotes = (rootState: RootState): QuotePerLegInterface[] =>
  getQuotes(rootState).outbound;

const getInboundQuotes = (rootState: RootState): QuotePerLegInterface[] =>
  getQuotes(rootState).inbound;

export const quotesSelectors = {
  getQuotesFetchStatus,
  getQuotes,
  getOutboundQuotes,
  getInboundQuotes,
};
