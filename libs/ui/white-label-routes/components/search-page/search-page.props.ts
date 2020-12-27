import { Dispatch } from '@reduxjs/toolkit';
import { WlaSearchForm } from '@white-label-airline/models/search-form';
import { WlaRootState } from '@white-label-airline/store/root/models/root-state.interface';
import {
  searchFormSlice,
  searchFormSelectors,
} from '@white-label-airline/store/search-form';
import { selectedQuotesSlice } from '@white-label-airline/store/selected-quotes';

const mapStateToProps = (state: WlaRootState) => {
  return {
    searchFormValues: searchFormSelectors.getSearchFormValues(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    resetSelectedQuotes() {
      dispatch(selectedQuotesSlice.actions.reset());
    },
    setSearchFormValues(searchFormValue: WlaSearchForm) {
      dispatch(searchFormSlice.actions.setSearchFormValues(searchFormValue));
    },
    resetSearchFromValues() {
      dispatch(searchFormSlice.actions.resetSearchFormValues());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type SearchPageProps = mapStateToPropsType &
  mapDispatchToPropsType & {
    initSearchForm?: WlaSearchForm;
    locale: Locale;
  };

export { mapStateToProps, mapDispatchToProps, SearchPageProps };
