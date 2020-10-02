import { Dispatch } from '@reduxjs/toolkit';
import {
  RootState,
  quotesSlice,
  quotesSelectors,
} from '@white-label-airline/store';
import { ButtonProps } from '@material-ui/core';

import { SearchFormInterface } from './models/search-form.interface';

export const mapStateToProps = (state: RootState) => {
  return { quotesFetchStatus: quotesSelectors.getQuotesFetchStatus(state) };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getQuotes(searchForm: SearchFormInterface) {
      dispatch(
        quotesSlice.actions.getQuotes({
          country: searchForm.country.Code,
          currency: searchForm.currency.Code,
          from: searchForm.from.PlaceId,
          to: searchForm.to.PlaceId,
          departDate: searchForm.departDate,
          returnDate: searchForm.returnDate,
          isOutbound: true,
        })
      );
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type SearchProps = mapStateToPropsType &
  mapDispatchToPropsType & {
    initSearchForm?: SearchFormInterface;
    bottonProps?: Partial<ButtonProps>;
    submitSearch?: Function;
  };
