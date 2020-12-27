import { WlaRootState } from '@white-label-airline/store/root';
import { searchFormSelectors } from '@white-label-airline/store/search-form';
import { selectedQuotesSelectors } from '@white-label-airline/store/selected-quotes';

const mapStateToProps = (state: WlaRootState) => {
  return {
    searchForm: searchFormSelectors.getSearchFormValues(state),
    selectedQuotes: selectedQuotesSelectors.getSelectedQuotesState(state),
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

type SelectedQuotesPageProps = mapStateToPropsType;

export { mapStateToProps, SelectedQuotesPageProps };
