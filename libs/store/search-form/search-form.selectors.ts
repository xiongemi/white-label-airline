import { WlaRootState } from '../root/root-state.interface';

import { WlaSearchForm } from './models/search-form.interface';

const getSearchFormValues = (rootState: WlaRootState): WlaSearchForm =>
  rootState.searchForm;

export const searchFormSelectors = { getSearchFormValues };
