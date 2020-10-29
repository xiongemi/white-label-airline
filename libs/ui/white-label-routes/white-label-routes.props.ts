import { History } from 'history';

import { SearchFormInterface } from '../search-form';

export interface WhiteLabelRoutesProps {
  initSearchForm?: SearchFormInterface;
  history: History;
}
