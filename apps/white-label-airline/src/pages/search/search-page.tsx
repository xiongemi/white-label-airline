import React, { useState, useEffect } from 'react';
import SearchForm, {
  SearchFormInterface,
  searchFormDataTransform,
} from '@white-label-airline/ui/search-form';
import { QuotesQueryParams } from '@white-label-airline/ui/quotes';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import { RoutesPath } from '../../app/routes-path.enum';

import { initSearchForm } from './search-form-init.const';

const SearchPage: React.FunctionComponent = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [queryParams, setQueryParams] = useState<SearchFormInterface>();

  useEffect(() => {
    if (search) {
      const query = (parse(search) as unknown) as QuotesQueryParams;
      const searchFormValuesFromQuery = searchFormDataTransform.transfromQuotesQueryParamsToSearchFormValues(
        query
      );
      setQueryParams(searchFormValuesFromQuery);
    }
  }, [search]);

  const submitSearch = (
    searchFormValues: SearchFormInterface,
    { setSubmitting }
  ) => {
    const searchParams = new URLSearchParams();
    const query = searchFormDataTransform.transformSearchFormValuesToQuotesQueryParams(
      searchFormValues
    );
    for (const key in query) {
      searchParams.set(key, query[key]);
    }
    setSubmitting(false);
    history.push({
      pathname: RoutesPath.Outbound,
      search: searchParams.toString(),
    });
  };

  return (
    <SearchForm
      initSearchForm={queryParams || initSearchForm}
      submitSearch={submitSearch}
    />
  );
};

export default SearchPage;
