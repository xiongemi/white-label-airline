import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { Place as PlaceInterface } from '@white-label-airline/services/places';
import { Field } from 'formik';

import { mapStateToProps, mapDispatchToProps, PlaceProps } from './place.props';

const Place: React.FunctionComponent<PlaceProps> = (props: PlaceProps) => {
  const handleChange = (change) => {
    props.getPlaces({
      country: props.country,
      currency: props.currency,
      query: change.eventTarget.value,
    });
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
      getOptionLabel={(option: PlaceInterface) => option.PlaceName}
      name={props.name || 'place'}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <TextField {...params} label={props.label} variant="outlined" />
      )}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Place);
