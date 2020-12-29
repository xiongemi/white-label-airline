import TextField from '@material-ui/core/TextField';
import { WlaPlace } from '@white-label-airline/models/place';
import { Field } from 'formik';
import {
  Autocomplete,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import React, { SyntheticEvent, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { useFieldErrorTouched } from '../../../hooks/use-field-errors-touched.hook';

import { mapStateToProps, mapDispatchToProps, PlaceProps } from './place.props';

const Place: React.FunctionComponent<PlaceProps> = ({
  places,
  country,
  currency,
  getPlaces,
  invalidPlaces,
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
      getPlaces({
        country: country,
        currency: currency,
        query: userInput,
      });
      setQuery(userInput);
    }
  };

  useEffect(() => {
    if (places.query === query) {
      if (invalidPlaces && invalidPlaces.length) {
        const invalidPlacesIds = invalidPlaces.map((place) => place.id);
        setFilteredPlaces(
          places.results.filter((place) => !invalidPlacesIds.includes(place.id))
        );
      } else {
        setFilteredPlaces(places.results);
      }
    }
  }, [query, places, invalidPlaces]);

  return (
    <Field
      loading={!filteredPlaces || !filteredPlaces.length}
      component={Autocomplete}
      disabled={!currency || !country || isSubmitting}
      options={filteredPlaces}
      getOptionLabel={(option: WlaPlace) =>
        option.name ? `${option.name} (${option.id})` : option.id
      }
      getOptionSelected={(option: WlaPlace, value: WlaPlace) =>
        option?.id === value?.id
      }
      name={name}
      loadingText={t('loading')}
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
