import {
  RootState,
  countriesSelectors,
  countriesSlice,
} from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';
import { Country } from '@white-label-airline/services/countries';

export const mapStateToProps = (state: RootState) => {
  return {
    countries: countriesSelectors.getCountries(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCountries() {
      dispatch(countriesSlice.actions.getCountries());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type CountryProps = mapStateToPropsType &
  mapDispatchToPropsType & {
    name: string;
  };
