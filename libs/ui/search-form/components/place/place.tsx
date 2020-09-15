import React, { useEffect, useState, SyntheticEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { PlaceInterface } from '@white-label-airline/services/places';
import { Field } from 'formik';

import { mapStateToProps, mapDispatchToProps, PlaceProps } from './place.props';

const Place: React.FunctionComponent<PlaceProps> = (props: PlaceProps) => {
  const handleChange = (event: SyntheticEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    const query = element.value;
    if (query.length >= 3) {
      props.getPlaces({
        country: props.country,
        currency: props.currency,
        query,
      });
    }
  };

  const [disabled, setDisabled] = useState<boolean>();

  useEffect(() => {
    setDisabled(!props.currency && !props.country);
  }, [props.currency, props.country]);

  return (
    <Field
      loading={!props.places || !props.places.length}
      component={Autocomplete}
      disabled={disabled}
      options={props.places}
      getOptionLabel={(option: PlaceInterface) =>
        `${option.PlaceName} (${option.PlaceId})`
      }
      getOptionSelected={(option: PlaceInterface, value: PlaceInterface) =>
        option.PlaceId === value.PlaceId
      }
      name={props.name}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...params} label={props.label} onChange={handleChange} />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Place);
