import TextField from '@material-ui/core/TextField';
import { WlaCurrency } from '@white-label-airline/models/currency';
import { FetchStatus } from '@white-label-airline/store/models';
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
  currenciesFetchStatus,
}: CurrencyProps) => {
  const { t } = useTranslation();
  const { fieldError, fieldTouched } = useFieldErrorTouched(name);

  useEffect(() => {
    if (
      currenciesFetchStatus === FetchStatus.Initial &&
      (!currencies || !currencies.length)
    ) {
      getCurrencies();
    }
  }, [currenciesFetchStatus, currencies, getCurrencies]);

  return (
    <Field
      loading={!currencies || !currencies.length}
      component={Autocomplete}
      options={currencies}
      getOptionLabel={(option: WlaCurrency) => option.code}
      getOptionSelected={(option: WlaCurrency, value: WlaCurrency) =>
        option.code === value.code
      }
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
