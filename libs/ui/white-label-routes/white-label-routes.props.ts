import { History } from 'history';
import { SearchFormInterface } from '@white-label-airline/store';

export interface WhiteLabelRoutesProps {
  initSearchForm?: SearchFormInterface;
  history: History;
}
