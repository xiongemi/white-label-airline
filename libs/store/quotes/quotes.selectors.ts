import {
  QuotePerLegInterface,
  QuotesPerTripInterface,
} from '@white-label-airline/services/quotes';

import { FetchStatus } from '../models/fetch-status.enum';
import { RootStateInterface } from '../root';

import { QuotesStateInterface } from './quotes-state.interface';

const getQuotesState = (rootState: RootStateInterface): QuotesStateInterface =>
  rootState.quotes;

const getQuotesFetchStatus = (rootState: RootStateInterface): FetchStatus =>
  getQuotesState(rootState).fetchStatus;

const getQuotes = (rootState: RootStateInterface): QuotesPerTripInterface =>
  getQuotesState(rootState).quotes;

const getOutboundQuotes = (
  rootState: RootStateInterface
): QuotePerLegInterface[] => getQuotes(rootState).outbound;

const getInboundQuotes = (
  rootState: RootStateInterface
): QuotePerLegInterface[] => getQuotes(rootState).inbound;

export const quotesSelectors = {
  getQuotesFetchStatus,
  getQuotes,
  getOutboundQuotes,
  getInboundQuotes,
};
