import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  mapStateToProps,
  mapDispatchToProps,
  CurrencyProps,
} from './currency.props';
import { connect } from 'react-redux';

const Currency: React.FunctionComponent<CurrencyProps> = (
  props: CurrencyProps
) => {
  const { t } = useTranslation();

  useEffect(() => {
    props.getCurrencies();
  }, []);

  return (
    <Autocomplete
      loading={!props.currencies || !props.currencies.length}
      options={props.currencies}
      getOptionLabel={(option) => option.Code}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t('search.currency')}
          variant="outlined"
          name={props.name || 'currency'}
          onChange={props.onChange}
          value={props.value}
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
