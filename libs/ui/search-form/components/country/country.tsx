import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field } from 'formik';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { CountryInterface } from '@white-label-airline/services/countries';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { useFieldErrorTouched } from '../../../hooks/use-field-errors-touched.hook';

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
}: CountryProps) => {
  const { t } = useTranslation();
  const { fieldError, fieldTouched } = useFieldErrorTouched(name);

  useEffect(() => {
    if (!countries || !countries.length) {
      getCountries();
    }
  }, [getCountries, countries]);

  return (
    <Field
      loading={!countries || !countries.length}
      component={Autocomplete}
      options={countries}
      getOptionLabel={(option: CountryInterface) => option.Name || option.Code}
      getOptionSelected={(option: CountryInterface, value: CountryInterface) =>
        option.Code === value.Code
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

export default connect(mapStateToProps, mapDispatchToProps)(Country);
