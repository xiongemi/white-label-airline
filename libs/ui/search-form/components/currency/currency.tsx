import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { connect } from 'react-redux';
import { Field } from 'formik';

import {
  mapStateToProps,
  mapDispatchToProps,
  CurrencyProps,
} from './currency.props';

const Currency: React.FunctionComponent<CurrencyProps> = (
  props: CurrencyProps
) => {
  useEffect(() => {
    props.getCurrencies();
  }, []);

  return (
    <Field
      loading={!props.currencies || !props.currencies.length}
      component={Autocomplete}
      options={props.currencies}
      getOptionLabel={(option: CurrencyInterface) => option.Code}
      getOptionSelected={(
        option: CurrencyInterface,
        value: CurrencyInterface
      ) => option.Code === value.Code}
      name={props.name}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...params} label={props.label} />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
