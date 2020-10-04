import React from 'react';
import SearchForm from '@white-label-airline/ui/search-form';
import { useHistory } from 'react-router-dom';

import { initSearchForm } from './search-form-init.const';

const SearchPage: React.FunctionComponent<{}> = () => {
  const history = useHistory();

  const submitSearch = () => history.push('/quotes');

  return (
    <SearchForm initSearchForm={initSearchForm} submitSearch={submitSearch} />
  );
};

export default SearchPage;
