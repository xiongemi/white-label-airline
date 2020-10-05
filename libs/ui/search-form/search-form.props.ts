import { Dispatch } from '@reduxjs/toolkit';
import {
  RootStateInterface,
  quotesSelectors,
} from '@white-label-airline/store';
import { ButtonProps } from '@material-ui/core';

import { SearchFormInterface } from './models/search-form.interface';

export const mapStateToProps = (state: RootStateInterface) => {
  return {
    quotesFetchStatus: quotesSelectors.getQuotesFetchStatus(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type SearchProps = mapStateToPropsType &
  mapDispatchToPropsType & {
    initSearchForm?: SearchFormInterface;
    bottonProps?: Partial<ButtonProps>;
    submitSearch?: Function;
  };
