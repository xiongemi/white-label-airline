import { Dispatch } from '@reduxjs/toolkit';
import {
  currenciesSelectors,
  currenciesSlice,
} from '@white-label-airline/store/currencies';
import { WlaRootState } from '@white-label-airline/store/root';

import { FormFieldProps } from '../../../models/form-field-props.interface';

const mapStateToProps = (state: WlaRootState) => {
  return {
    currencies: currenciesSelectors.getCurrencies(state),
    currenciesFetchStatus: currenciesSelectors.getCurrenciesFetchStatus(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCurrencies() {
      dispatch(currenciesSlice.actions.getCurrencies());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type CurrencyProps = mapStateToPropsType &
  mapDispatchToPropsType &
  FormFieldProps;

export { mapStateToProps, mapDispatchToProps, CurrencyProps };
