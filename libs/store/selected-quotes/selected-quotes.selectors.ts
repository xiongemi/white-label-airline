import { RootStateInterface } from '../root/root-state.interface';
import { SelectedQuotesStateInterface } from './selected-quotes-state.interface';

const getSelectedQuotesState = (
  rootState: RootStateInterface
): SelectedQuotesStateInterface => rootState.selectedQuotes;

export const selectedQuotesSelectors = { getSelectedQuotesState };
