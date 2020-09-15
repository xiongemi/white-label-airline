import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from '@white-label-airline/store';

import { SearchFormInterface } from './types/search-form.interface';

export const mapStateToProps = (state: RootState) => {
  return {};
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type SearchProps = mapStateToPropsType &
  mapDispatchToPropsType & {
    initSearchForm?: SearchFormInterface;
  };
