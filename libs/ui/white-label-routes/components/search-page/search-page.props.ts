import { Dispatch } from '@reduxjs/toolkit';
import { WlaSearchForm } from '@white-label-airline/store/search-form';
import { selectedQuotesSlice } from '@white-label-airline/store/selected-quotes';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    resetSelectedQuotes() {
      dispatch(selectedQuotesSlice.actions.reset());
    },
  };
};

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type SearchPageProps = mapDispatchToPropsType & {
  initSearchForm?: WlaSearchForm;
  locale: Locale;
};

export { mapDispatchToProps, SearchPageProps };
