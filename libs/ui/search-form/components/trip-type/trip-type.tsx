import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { WlaTripType } from '@white-label-airline/models/search-form';
import { Field } from 'formik';
import { Select } from 'formik-material-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FormFieldProps } from '../../../models/form-field-props.interface';

let count = 0;

const TripType: React.FunctionComponent<FormFieldProps> = (
  props: FormFieldProps
) => {
  const { t } = useTranslation();

  return (
    <FormControl fullWidth={true}>
      <InputLabel htmlFor={props.name + count++}>{props.label}</InputLabel>
      <Field component={Select} id={props.name + count++} name={props.name}>
        <MenuItem value={WlaTripType.OneWay}>{t(WlaTripType.OneWay)}</MenuItem>
        <MenuItem value={WlaTripType.RoundTrip}>
          {t(WlaTripType.RoundTrip)}
        </MenuItem>
      </Field>
    </FormControl>
  );
};

export default TripType;
