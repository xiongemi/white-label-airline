import {
  RootState,
  countriesSelectors,
  countriesActions,
} from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';

export const mapStateToProps = (state: RootState) => {
  return {
    countries: countriesSelectors.getCountriesState(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCountries() {
      dispatch(countriesActions.getCountries());
    },
  };
};

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
export type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
