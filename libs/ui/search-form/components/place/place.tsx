import React, { SyntheticEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { connect } from 'react-redux';
import { PlaceInterface } from '@white-label-airline/services/places';
import { Field, getIn } from 'formik';
import { useTranslation } from 'react-i18next';

import { mapStateToProps, mapDispatchToProps, PlaceProps } from './place.props';

const Place: React.FunctionComponent<PlaceProps> = ({
  places,
  country,
  currency,
  getPlaces,
  name,
  label,
  touched,
  errors,
}: PlaceProps) => {
  const { t } = useTranslation();

  const handleChange = (event: SyntheticEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    const query = element.value;
    if (query.length >= 3) {
      getPlaces({
        country: country,
        currency: currency,
        query,
      });
    }
  };

  const error = getIn(errors, name);
  touched = getIn(touched, name);

  return (
    <Field
      loading={!places || !places.length}
      component={Autocomplete}
      disabled={!currency || !country}
      options={places}
      getOptionLabel={(option: PlaceInterface) =>
        `${option.PlaceName} (${option.PlaceId})`
      }
      getOptionSelected={(option: PlaceInterface, value: PlaceInterface) =>
        option.PlaceId === value.PlaceId
      }
      name={name}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          label={label}
          onChange={handleChange}
          error={touched && !!error}
          helperText={t(error, { field: label })}
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Place);
