import TextField from '@material-ui/core/TextField';
import { CurrencyInterface } from '@white-label-airline/services/currencies';
import { Field } from 'formik';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { useFieldErrorTouched } from '../../../hooks/use-field-errors-touched.hook';

import {
  mapStateToProps,
  mapDispatchToProps,
  CurrencyProps,
} from './currency.props';

const Currency: React.FunctionComponent<CurrencyProps> = ({
  currencies,
  name,
  label,
  getCurrencies,
}: CurrencyProps) => {
  const { t } = useTranslation();
  const { fieldError, fieldTouched } = useFieldErrorTouched(name);

  useEffect(() => {
    if (!currencies || !currencies.length) {
      getCurrencies();
    }
  }, [currencies, getCurrencies]);

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
          error={fieldTouched && !!fieldError}
          helperText={t(fieldError, { field: label })}
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
