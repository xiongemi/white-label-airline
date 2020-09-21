import {
  RootState,
  placesSelectors,
  placesSlice,
} from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';
import { CountryInterface } from '@white-label-airline/services/countries';
import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { PlaceInterface } from '@white-label-airline/services/places';
import { FormFieldProps } from '@white-label-airline/ui/types/form-field-props.interface';
import { FormikProps } from 'formik';

import { SearchFormInterface } from '../../types/search-form.interface';

export const mapStateToProps = (
  state: RootState
): { places: PlaceInterface[] } => {
  return {
    places: placesSelectors.getPlaces(state),
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch
): { getPlaces: Function } => {
  return {
    getPlaces({
      country,
      currency,
      query,
    }: {
      country: CountryInterface;
      currency: CurrencyInterface;
      query: string;
    }) {
      dispatch(
        placesSlice.actions.getPlaces({
          country: country.Code,
          currency: currency.Code,
          query,
        })
      );
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type PlaceProps = mapStateToPropsType &
  mapDispatchToPropsType &
  FormFieldProps &
  Partial<FormikProps<SearchFormInterface>> & {
    country: CountryInterface;
    currency: CurrencyInterface;
  };
