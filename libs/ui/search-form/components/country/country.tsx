import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, getIn } from 'formik';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { CountryInterface } from '@white-label-airline/services/countries';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import {
  mapStateToProps,
  mapDispatchToProps,
  CountryProps,
} from './country.props';

const Country: React.FunctionComponent<CountryProps> = ({
  getCountries,
  countries,
  name,
  label,
  touched,
  errors,
}: CountryProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const error = getIn(errors, name);
  touched = getIn(touched, name);

  return (
    <Field
      loading={!countries || !countries.length}
      component={Autocomplete}
      options={countries}
      getOptionLabel={(option: CountryInterface) => option.Name}
      getOptionSelected={(option: CountryInterface, value: CountryInterface) =>
        option.Code === value.Code
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(Country);
