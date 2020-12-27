import { WlaSearchForm } from '@white-label-airline/models/search-form';

import { WlaRootState } from '../root/models/root-state.interface';

const getSearchFormValues = (rootState: WlaRootState): WlaSearchForm =>
  rootState.searchForm;

export const searchFormSelectors = { getSearchFormValues };
