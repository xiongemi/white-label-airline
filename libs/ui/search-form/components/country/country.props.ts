import { Dispatch } from '@reduxjs/toolkit';
import {
  countriesSelectors,
  countriesSlice,
} from '@white-label-airline/store/countries';
import { WlaRootState } from '@white-label-airline/store/root';

import { FormFieldProps } from '../../../models/form-field-props.interface';

const mapStateToProps = (state: WlaRootState) => {
  return {
    countries: countriesSelectors.getCountries(state),
    countriesFetchStatus: countriesSelectors.getCountriesFetchStatus(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCountries() {
      dispatch(countriesSlice.actions.getCountries());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type CountryProps = mapStateToPropsType &
  mapDispatchToPropsType &
  FormFieldProps;

export { mapDispatchToProps, mapStateToProps, CountryProps };
