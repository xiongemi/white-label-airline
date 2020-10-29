import {
  RootStateInterface,
  selectedQuotesSelectors,
} from '@white-label-airline/store';

import { QuotesQueryParams } from '../models/quotes-query-params.interface';

export const mapStateToProps = (state: RootStateInterface) => {
  return {
    selectedQuotes: selectedQuotesSelectors.getSelectedQuotesState(state),
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

export type SelectedQuotesProps = mapStateToPropsType & {
  queryParams: QuotesQueryParams;
  modifyOutboundQuote: () => void;
  modifyInboundQuote: () => void;
};
