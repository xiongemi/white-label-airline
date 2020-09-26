import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { connect } from 'react-redux';
import { Field, getIn } from 'formik';
import { useTranslation } from 'react-i18next';

import {
  mapStateToProps,
  mapDispatchToProps,
  CurrencyProps,
} from './currency.props';

const Currency: React.FunctionComponent<CurrencyProps> = ({
  currencies,
  errors,
  touched,
  name,
  label,
  getCurrencies,
}: CurrencyProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  const error = getIn(errors, name);
  touched = getIn(touched, name);

  return (
    <Field
      loading={!currencies || !currencies.length}
      component={Autocomplete}
      options={currencies}
      getOptionLabel={(option: CurrencyInterface) => option.Code}
      getOptionSelected={(
        option: CurrencyInterface,
        value: CurrencyInterface
      ) => option.Code === value.Code}
      name={name}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          label={label}
          error={touched && !!error}
          helperText={t(error, { field: label })}
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
