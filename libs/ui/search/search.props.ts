import { RootState } from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';

export const mapStateToProps = (state: RootState) => {
  return {};
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type SearchProps = mapStateToPropsType & mapDispatchToPropsType;
