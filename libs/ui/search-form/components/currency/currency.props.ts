import { Dispatch } from '@reduxjs/toolkit';
import {
  WlaRootState,
  currenciesSelectors,
  currenciesSlice,
} from '@white-label-airline/store';

import { FormFieldProps } from '../../../models/form-field-props.interface';

export const mapStateToProps = (state: WlaRootState) => {
  return {
    currencies: currenciesSelectors.getCurrencies(state),
    currenciesFetchStatus: currenciesSelectors.getCurrenciesFetchStatus(state),
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
