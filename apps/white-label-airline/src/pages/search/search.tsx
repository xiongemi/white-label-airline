import React from 'react';
import SearchForm from '@white-label-airline/ui/search-form';

import { country } from './country.const';
import { initSearchForm } from './search-form-init.const';

const Search: React.FunctionComponent<{}> = () => {
  return <SearchForm initSearchForm={initSearchForm} />;
};

export default Search;
