import { Dispatch } from '@reduxjs/toolkit';
import {
  errorSelectors,
  errorSlice,
  RootStateInterface,
} from '@white-label-airline/store';

export const mapStateToProps = (state: RootStateInterface) => {
  return {
    error: errorSelectors.getError(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    clearError() {
      dispatch(errorSlice.actions.clearError());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type ErrorSnackbarProps = mapStateToPropsType & mapDispatchToPropsType;
