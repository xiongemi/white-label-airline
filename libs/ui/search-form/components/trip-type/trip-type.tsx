import React from 'react';
import { Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Select } from 'formik-material-ui';
import { useTranslation } from 'react-i18next';

import { TripTypeEnum } from '../../models/trip-type.enum';
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
        <MenuItem value={TripTypeEnum.OneWay}>
          {t(TripTypeEnum.OneWay)}
        </MenuItem>
        <MenuItem value={TripTypeEnum.RoundTrip}>
          {t(TripTypeEnum.RoundTrip)}
        </MenuItem>
      </Field>
    </FormControl>
  );
};

export default TripType;
