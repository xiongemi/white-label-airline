import { RootState, quotesSelectors } from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';

export const mapStateToProps = (state: RootState) => {
  return {
    quotes: quotesSelectors.getQuotes(state),
    carriers: quotesSelectors.getCarriers(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type QuotesListProps = mapStateToPropsType & mapDispatchToPropsType;
