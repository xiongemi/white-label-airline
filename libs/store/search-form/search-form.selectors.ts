import { RootStateInterface } from '../root/root-state.interface';

import { SearchFormInterface } from './search-form.interface';

const getSearchFormValues = (
  rootState: RootStateInterface
): SearchFormInterface => rootState.searchForm;

export const searchFormSelectors = { getSearchFormValues };
