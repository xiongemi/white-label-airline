import { RootState, setApiKey, apiSelectors } from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';

export const mapStateToProps = (state: RootState) => {
  return {
    apiKey: apiSelectors.getApiKey(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setApiKey(apiKey: string) {
      dispatch(setApiKey(apiKey));
    },
  };
};

export type RouteProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
