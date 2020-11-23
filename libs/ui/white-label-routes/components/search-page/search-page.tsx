import { SearchFormInterface } from '@white-label-airline/store';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useQueryParamsAsSearchForm } from '../../../hooks/use-query-params.hook';
import SearchForm, { searchFormDataTransform } from '../../../search-form';
import { RoutesPath } from '../../models/routes-path.enum';

import { SearchPageProps } from './search-page.props';

const SearchPage: React.FunctionComponent<SearchPageProps> = ({
  initSearchForm,
}: SearchPageProps) => {
  const history = useHistory();
  const { searchForm } = useQueryParamsAsSearchForm();

  const submitSearch = (searchFormValues: SearchFormInterface) => {
    const searchParams = new URLSearchParams();
    const query = searchFormDataTransform.transformSearchFormValuesToQuotesQueryParams(
      searchFormValues
    );
    for (const key in query) {
      searchParams.set(key, query[key]);
    }
    history.push({
      pathname: RoutesPath.Outbound,
      search: searchParams.toString(),
    });
  };

  return (
    <SearchForm
      initSearchForm={searchForm || initSearchForm}
      submitSearch={submitSearch}
    />
  );
};

export default SearchPage;
