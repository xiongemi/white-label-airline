import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { mapStateToProps, PlaceProps } from './place.props';
import { connect } from 'react-redux';
import {
  Place as PlaceInterface,
  getPlaceLabel,
} from '@white-label-airline/services/places';

const Place: React.FunctionComponent<PlaceProps> = (props: PlaceProps) => {
  const handleChange = (change) => {
    props.getPlaces({
      country: props.country,
      currency: props.currency,
      query: change.eventTarget.value,
    });
    props.onChange(change);
  };

  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(!props.currency && !props.country);
  }, [props.currency, props.country]);

  return (
    <Autocomplete
      loading={loading}
      disabled={!props.currency && !props.country}
      options={props.places}
      getOptionLabel={(option: PlaceInterface) => getPlaceLabel(option)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          variant="outlined"
          name={props.name || 'place'}
          onChange={handleChange}
          value={props.value}
        />
      )}
    />
  );
};

export default connect(mapStateToProps)(Place);
