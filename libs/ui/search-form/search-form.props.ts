import { Dispatch } from '@reduxjs/toolkit';
import {
  searchFormSlice,
  WlaSearchForm,
  searchFormSelectors,
  WlaRootState,
} from '@white-label-airline/store';

export const mapStateToProps = (state: WlaRootState) => {
  return {
    searchFormValues: searchFormSelectors.getSearchFormValues(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
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

export type SearchProps = mapStateToPropsType &
  mapDispatchToPropsType & {
    initSearchForm: WlaSearchForm;
    submitSearch: (values: WlaSearchForm) => void;
  };
