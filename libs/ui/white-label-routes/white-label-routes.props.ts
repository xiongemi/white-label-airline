import { SearchFormInterface } from '@white-label-airline/store';
import { History } from 'history';

export interface WhiteLabelRoutesProps {
  initSearchForm?: SearchFormInterface;
  history: History;
}
