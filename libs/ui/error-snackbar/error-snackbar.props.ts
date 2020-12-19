import { Dispatch } from '@reduxjs/toolkit';
import { errorSelectors, errorSlice } from '@white-label-airline/store/error';
import { WlaRootState } from '@white-label-airline/store/root';

const mapStateToProps = (state: WlaRootState) => {
  return {
    error: errorSelectors.getError(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    clearError() {
      dispatch(errorSlice.actions.clearError());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type ErrorSnackbarProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps, ErrorSnackbarProps };
