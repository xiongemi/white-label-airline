import { ButtonProps } from '@material-ui/core';
import { FormikBag } from 'formik';

import { SearchFormInterface } from './models/search-form.interface';

export type SearchProps = {
  initSearchForm?: SearchFormInterface;
  bottonProps?: Partial<ButtonProps>;
  submitSearch: (
    values: SearchFormInterface,
    formikBag: Partial<FormikBag<SearchProps, SearchFormInterface>>
  ) => void;
};
