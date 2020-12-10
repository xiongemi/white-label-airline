import { Dispatch } from '@reduxjs/toolkit';
import {
  WlaRootState,
  countriesSelectors,
  countriesSlice,
} from '@white-label-airline/store';

import { FormFieldProps } from '../../../models/form-field-props.interface';

export const mapStateToProps = (state: WlaRootState) => {
  return {
    countries: countriesSelectors.getCountries(state),
    countriesFetchStatus: countriesSelectors.getCountriesFetchStatus(state),
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
