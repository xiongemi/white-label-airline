import {
  RootState,
  currenciesSelectors,
  currenciesSlice,
} from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';
import { FormFieldProps } from '@white-label-airline/ui/types/form-field-props.interface';

export const mapStateToProps = (state: RootState) => {
  return {
    currencies: currenciesSelectors.getCurrencies(state),
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCurrencies() {
      dispatch(currenciesSlice.actions.getCurrencies());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type CurrencyProps = mapStateToPropsType &
  mapDispatchToPropsType &
  FormFieldProps;
