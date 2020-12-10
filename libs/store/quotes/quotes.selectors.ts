import {
  WlaQuotePerLeg,
  WlaQuotePerTrip,
} from '@white-label-airline/services/quotes';

import { FetchStatus } from '../models/fetch-status.enum';
import { WlaRootState } from '../root';

import { WlaQuotesState } from './models/quotes-state.interface';

const getQuotesState = (rootState: WlaRootState): WlaQuotesState =>
  rootState.quotes;

const getQuotesFetchStatus = (rootState: WlaRootState): FetchStatus =>
  getQuotesState(rootState).fetchStatus;

const getQuotes = (rootState: WlaRootState): WlaQuotePerTrip =>
  getQuotesState(rootState).quotes;

const getOutboundQuotes = (rootState: WlaRootState): WlaQuotePerLeg[] =>
  getQuotes(rootState).outbound;

const getInboundQuotes = (rootState: WlaRootState): WlaQuotePerLeg[] =>
  getQuotes(rootState).inbound;

export const quotesSelectors = {
  getQuotesFetchStatus,
  getQuotes,
  getOutboundQuotes,
  getInboundQuotes,
};
