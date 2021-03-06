import { TextField } from '@material-ui/core';
import { WlaCountry } from '@white-label-airline/models/country';
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
  CountryProps,
} from './country.props';

const Country: React.FunctionComponent<CountryProps> = ({
  getCountries,
  countries,
  countriesFetchStatus,
  name,
  label,
}: CountryProps) => {
  const { t } = useTranslation();
  const { fieldError, fieldTouched } = useFieldErrorTouched(name);

  useEffect(() => {
    if (
      countriesFetchStatus === FetchStatus.Initial &&
      (!countries || !countries.length)
    ) {
      getCountries();
    }
  }, [countriesFetchStatus, getCountries, countries]);

  return (
    <Field
      loading={!countries || !countries.length}
      component={Autocomplete}
      options={countries}
      getOptionLabel={(option: WlaCountry) => option.name || option.code}
      getOptionSelected={(option: WlaCountry, value: WlaCountry) =>
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

export default connect(mapStateToProps, mapDispatchToProps)(Country);
