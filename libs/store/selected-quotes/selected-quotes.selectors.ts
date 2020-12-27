import { WlaSelectedQuotes } from '@white-label-airline/models/selected-quotes';

import { WlaRootState } from '../root/models/root-state.interface';

const getSelectedQuotesState = (rootState: WlaRootState): WlaSelectedQuotes =>
  rootState.selectedQuotes;

export const selectedQuotesSelectors = { getSelectedQuotesState };
