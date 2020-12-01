import { renderHook } from '@testing-library/react-hooks';

import { useFieldErrorTouched } from './use-field-errors-touched.hook';

jest.mock('formik', () => ({
  useFormikContext: () => {
    return {
      touched: { fieldName: true },
      errors: { fieldName: 'random error' },
      isSubmitting: true,
    };
  },
  getIn: (context: Record<string, unknown>, fieldName: string) => {
    return context[fieldName];
  },
}));

fdescribe('Use Field Errors Touched Hook', () => {
  test('should set field error and touched', () => {
    const { result } = renderHook(() => useFieldErrorTouched('fieldName'));
    expect(result.current.fieldError).toEqual('random error');
    expect(result.current.fieldTouched).toEqual(true);
    expect(result.current.isSubmitting).toEqual(true);
  });
});
