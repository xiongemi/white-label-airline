import {
  QuotesResponseInterface,
  QuoteInterface,
  CarrierInterface,
} from '@white-label-airline/services/quotes';

import { RootState } from '../root';
import { FetchStatus } from '../models/fetch-status.enum';

import { QuotesStateInterface } from './quotes-state.interface';

const getQuotesState = (rootState: RootState): QuotesStateInterface =>
  rootState.quotes;

const getQuotesFetchStatus = (rootState: RootState): FetchStatus =>
  getQuotesState(rootState).fetchStatus;

const getQuotesResponse = (rootState: RootState): QuotesResponseInterface =>
  getQuotesState(rootState).response;

const getCarriers = (rootState: RootState): CarrierInterface[] =>
  getQuotesResponse(rootState).Carriers;

const getQuotes = (rootState: RootState): QuoteInterface[] =>
  getQuotesResponse(rootState).Quotes;

export const quotesSelectors = {
  getQuotesResponse,
  getQuotesFetchStatus,
  getCarriers,
  getQuotes,
};
