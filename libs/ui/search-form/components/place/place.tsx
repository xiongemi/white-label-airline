import React, { SyntheticEvent, useState, useEffect } from 'react';
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
  const [query, setQuery] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const handleChange = (event: SyntheticEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    const userInput = element.value;
    if (userInput.length >= 3 && query !== userInput) {
      setQuery(userInput);
    }
  };

  useEffect(() => {
    if (country && currency && query && getPlaces) {
      getPlaces({
        country: country,
        currency: currency,
        query,
      });
    }
  }, [country, currency, getPlaces, query]);

  useEffect(() => {
    if (places.query === query) {
      setFilteredPlaces(places.results);
    }
  }, [query, places]);

  const error = getIn(errors, name);
  touched = getIn(touched, name);

  return (
    <Field
      loading={!filteredPlaces || !filteredPlaces.length}
      component={Autocomplete}
      disabled={!currency || !country}
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
          error={touched && !!error}
          helperText={t(error, { field: label })}
        />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Place);
