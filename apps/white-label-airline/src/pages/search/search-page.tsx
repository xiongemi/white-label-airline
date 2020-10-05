import React from 'react';
import SearchForm, {
  SearchFormInterface,
} from '@white-label-airline/ui/search-form';
import { useHistory } from 'react-router-dom';

import { initSearchForm } from './search-form-init.const';

const SearchPage: React.FunctionComponent<{}> = () => {
  const history = useHistory();

  const submitSearch = (values: SearchFormInterface) => {
    const searchParams = new URLSearchParams();
    for (const key in values) {
      searchParams.set(key, values[key]);
    }
    history.push({ pathname: '/quotes', search: searchParams.toString() });
  };

  return (
    <SearchForm initSearchForm={initSearchForm} submitSearch={submitSearch} />
  );
};

export default SearchPage;
