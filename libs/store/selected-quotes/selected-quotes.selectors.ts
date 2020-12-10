import { WlaRootState } from '../root/models/root-state.interface';

import { WlaSelectedQuotesState } from './models/selected-quotes-state.interface';

const getSelectedQuotesState = (
  rootState: WlaRootState
): WlaSelectedQuotesState => rootState.selectedQuotes;

export const selectedQuotesSelectors = { getSelectedQuotesState };
