import React, { SyntheticEvent, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { connect } from 'react-redux';
import { PlaceInterface } from '@white-label-airline/services/places';
import { Field } from 'formik';
import { useTranslation } from 'react-i18next';

import { useFieldErrorTouched } from '../../../hooks/field-errors-touched.hooks';

import { mapStateToProps, mapDispatchToProps, PlaceProps } from './place.props';

const Place: React.FunctionComponent<PlaceProps> = ({
  places,
  country,
  currency,
  getPlaces,
  name,
  label,
}: PlaceProps) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const { fieldError, fieldTouched, isSubmitting } = useFieldErrorTouched(name);

  const handleChange = (event: SyntheticEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    const userInput = element.value;
    if (userInput.length >= 3 && query !== userInput) {
      setQuery(userInput);
    }
  };

  useEffect(() => {
    getPlaces({
      country: country,
      currency: currency,
      query,
    });
  }, [country, currency, query, getPlaces]);

  useEffect(() => {
    if (places.query === query) {
      setFilteredPlaces(places.results);
    }
  }, [query, places]);

  return (
    <Field
      loading={!filteredPlaces || !filteredPlaces.length}
      component={Autocomplete}
      disabled={!currency || !country || isSubmitting}
      options={filteredPlaces}
      getOptionLabel={(option: PlaceInterface) =>
        `${option.PlaceName} (${option.PlaceId})`
      }
      getOptionSelected={(option: PlaceInterface, value: PlaceInterface) =>
        option?.PlaceId === value?.PlaceId
      }
      name={name}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField
          {...params}
          label={label}
          onChange={handleChange}
          error={fieldTouched && !!fieldError}
          helperText={t(fieldError, { field: label })}
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Place);
