import {
  RootState,
  placesSelectors,
  placesSlice,
} from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';
import { Country } from '@white-label-airline/services/countries';
import { Currency } from '@white-label-airline/services/currencies';
import { Place } from '@white-label-airline/services/places';

export const mapStateToProps = (state: RootState) => {
  return {
    places: placesSelectors.getPlaces(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getPlaces({
      country,
      currency,
      query,
    }: {
      country: Country;
      currency: Currency;
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
  mapDispatchToPropsType & {
    label: string;
    country: Country;
    currency: Currency;
    onChange: any;
    value: Place;
    name: string;
  };
