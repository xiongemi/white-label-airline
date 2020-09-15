import {
  RootState,
  countriesSelectors,
  countriesSlice,
} from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';
import { CountryInterface } from '@white-label-airline/services/countries';
import { FormFieldProps } from '@white-label-airline/ui/types/form-field-props.interface';

export const mapStateToProps = (
  state: RootState
): { countries: CountryInterface[] } => {
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
  mapDispatchToPropsType &
  FormFieldProps;
