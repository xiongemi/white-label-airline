import {
  RootState,
  currenciesSelectors,
  currenciesSlice,
} from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';
import { Currency } from '@white-label-airline/services/currencies';

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
  mapDispatchToPropsType & {
    onChange: any;
    value: Currency;
    name: string;
  };
