import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@material-ui/lab/Autocomplete';
import { Currency as CurrencyInterface } from '@white-label-airline/services/currencies';
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
  const { t } = useTranslation();

  useEffect(() => {
    props.getCurrencies();
  }, []);

  return (
    <Field
      loading={!props.currencies || !props.currencies.length}
      component={Autocomplete}
      options={props.currencies}
      getOptionLabel={(option: CurrencyInterface) => option.Code}
      name={props.name || 'currency'}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          label={t('search.currency')}
          variant="outlined"
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
