import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useTranslation } from 'react-i18next';
import {
  mapStateToProps,
  mapDispatchToProps,
  CountryProps,
} from './country.props';
import { connect } from 'react-redux';

const Country: React.FunctionComponent<CountryProps> = (
  props: CountryProps
) => {
  const { t } = useTranslation();

  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <Autocomplete
      loading={!props.countries || !props.countries.length}
      options={props.countries}
      getOptionLabel={(option) => option.Name}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t('search.country')}
          variant="outlined"
          name={props.name || 'currency'}
          onChange={props.onChange}
          value={props.value}
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Country);
