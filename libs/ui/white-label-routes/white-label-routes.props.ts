import { WlaSearchForm } from '@white-label-airline/models/search-form';
import { History } from 'history';

export interface WhiteLabelRoutesProps {
  initSearchForm?: WlaSearchForm;
  history: History;
  locale?: Locale;
}
