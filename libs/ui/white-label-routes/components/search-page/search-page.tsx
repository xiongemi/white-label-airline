import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import SearchForm, {
  SearchFormInterface,
  searchFormDataTransform,
} from '../../../search-form';
import { QuotesQueryParams } from '../../../quotes';
import { RoutesPath } from '../../models/routes-path.enum';

import { SearchPageProps } from './search-page.props';

const SearchPage: React.FunctionComponent<SearchPageProps> = ({
  initSearchForm,
}: SearchPageProps) => {
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
