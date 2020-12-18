import { WlaSearchForm } from '@white-label-airline/store/search-form';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useQueryParamsAsSearchForm } from '../../../hooks/use-query-params.hook';
import SearchForm, { searchFormDataTransform } from '../../../search-form';
import { RoutesPath } from '../../models/routes-path.enum';

import { mapDispatchToProps, SearchPageProps } from './search-page.props';

const SearchPage: React.FunctionComponent<SearchPageProps> = ({
  initSearchForm,
  resetSelectedQuotes,
}: SearchPageProps) => {
  const history = useHistory();
  const { searchForm } = useQueryParamsAsSearchForm();

  const submitSearch = (searchFormValues: WlaSearchForm) => {
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

  useEffect(() => {
    resetSelectedQuotes();
  }, [resetSelectedQuotes]);

  return (
    <SearchForm
      initSearchForm={searchForm || initSearchForm}
      submitSearch={submitSearch}
    />
  );
};

export default connect(null, mapDispatchToProps)(SearchPage);
