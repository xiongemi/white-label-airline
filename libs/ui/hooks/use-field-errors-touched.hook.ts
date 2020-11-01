import { useFormikContext, getIn } from 'formik';
import { useState, useEffect } from 'react';

export function useFieldErrorTouched(name: string) {
  const { touched, errors, isSubmitting } = useFormikContext();
  const [fieldError, setFieldError] = useState(null);
  const [fieldTouched, setFieldTouched] = useState(false);

  useEffect(() => {
    setFieldError(getIn(errors, name));
  }, [errors, name]);

  useEffect(() => {
    setFieldTouched(getIn(touched, name));
  }, [touched, name]);

  return { fieldError, fieldTouched, isSubmitting };
}
