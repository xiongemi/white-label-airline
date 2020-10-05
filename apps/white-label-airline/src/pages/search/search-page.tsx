import React from 'react';
import SearchForm, {
  SearchFormInterface,
  searchFormDataTransform,
} from '@white-label-airline/ui/search-form';
import { useHistory } from 'react-router-dom';

import { initSearchForm } from './search-form-init.const';

const SearchPage: React.FunctionComponent<{}> = () => {
  const history = useHistory();

  const submitSearch = (searchFormValues: SearchFormInterface) => {
    const searchParams = new URLSearchParams();
    const query = searchFormDataTransform.transformSearchFormValuesToGetQuotesPayload(
      searchFormValues
    );
    for (const key in query) {
      searchParams.set(key, query[key]);
    }
    history.push({ pathname: '/quotes', search: searchParams.toString() });
  };

  return (
    <SearchForm initSearchForm={initSearchForm} submitSearch={submitSearch} />
  );
};

export default SearchPage;
