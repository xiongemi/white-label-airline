import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Field } from 'formik';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { Country as CountryInterface } from '@white-label-airline/services/countries';
import { TextField } from '@material-ui/core';

import {
  mapStateToProps,
  mapDispatchToProps,
  CountryProps,
} from './country.props';

const Country: React.FunctionComponent<CountryProps> = (
  props: CountryProps
) => {
  const { t } = useTranslation();

  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <Field
      loading={!props.countries || !props.countries.length}
      component={Autocomplete}
      options={props.countries}
      getOptionLabel={(option: CountryInterface) => option.Name}
      name={props.name || 'country'}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...params} label={t('search.country')} variant="outlined" />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Country);
