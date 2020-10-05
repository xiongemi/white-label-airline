import { ButtonProps } from '@material-ui/core';

import { SearchFormInterface } from './models/search-form.interface';

export type SearchProps = {
  initSearchForm?: SearchFormInterface;
  bottonProps?: Partial<ButtonProps>;
  submitSearch: Function;
};
