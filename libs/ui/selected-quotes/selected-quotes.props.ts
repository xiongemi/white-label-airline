import {
  WlaRootState,
  selectedQuotesSelectors,
} from '@white-label-airline/store';

import { QuotesQueryParams } from '../models/quotes-query-params.interface';

const mapStateToProps = (state: WlaRootState) => {
  return {
    selectedQuotes: selectedQuotesSelectors.getSelectedQuotesState(state),
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

type SelectedQuotesProps = mapStateToPropsType & {
  queryParams: QuotesQueryParams;
  modifyOutboundQuote: () => void;
  modifyInboundQuote: () => void;
};

export { mapStateToProps, SelectedQuotesProps };
