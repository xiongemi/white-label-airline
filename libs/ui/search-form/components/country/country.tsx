import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field } from 'formik';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { CountryInterface } from '@white-label-airline/services/countries';
import { TextField } from '@material-ui/core';

import {
  mapStateToProps,
  mapDispatchToProps,
  CountryProps,
} from './country.props';

const Country: React.FunctionComponent<CountryProps> = (
  props: CountryProps
) => {
  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <Field
      loading={!props.countries || !props.countries.length}
      component={Autocomplete}
      options={props.countries}
      getOptionLabel={(option: CountryInterface) => option.Name}
      getOptionSelected={(option: CountryInterface, value: CountryInterface) =>
        option.Code === value.Code
      }
      name={props.name}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...params} label={props.label} />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Country);
