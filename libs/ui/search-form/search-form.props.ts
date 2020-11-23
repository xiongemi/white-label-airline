import { Dispatch } from '@reduxjs/toolkit';
import {
  searchFormSlice,
  SearchFormInterface,
  searchFormSelectors,
  RootStateInterface,
} from '@white-label-airline/store';

export const mapStateToProps = (state: RootStateInterface) => {
  return {
    searchFormValues: searchFormSelectors.getSearchFormValues(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setSearchFormValues(searchFormValue: SearchFormInterface) {
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
    initSearchForm: SearchFormInterface;
    submitSearch: (values: SearchFormInterface) => void;
  };
