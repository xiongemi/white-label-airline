import {
  QuotesResponseInterface,
  QuoteInterface,
  CarrierInterface,
} from '@white-label-airline/services/quotes';

import { RootState } from '../root';

const getQuotesResponse = (rootState: RootState): QuotesResponseInterface =>
  rootState.quotes;

const getCarriers = (rootState: RootState): CarrierInterface[] =>
  getQuotesResponse(rootState).Carriers;

const getQuotes = (rootState: RootState): QuoteInterface[] =>
  getQuotesResponse(rootState).Quotes;

export const placesSelectors = { getQuotesResponse, getCarriers, getQuotes };
