import { WlaSearchForm } from '@white-label-airline/models/search-form';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SearchForm from '../../../search-form';
import { RoutesPath } from '../../models/routes-path.enum';

import {
  mapStateToProps,
  mapDispatchToProps,
  SearchPageProps,
} from './search-page.props';

const SearchPage: React.FunctionComponent<SearchPageProps> = ({
  initSearchForm,
  resetSelectedQuotes,
  locale,
  searchFormValues,
  setSearchFormValues,
  resetSearchFromValues,
}: SearchPageProps) => {
  const history = useHistory();

  const submitSearchForm = (values: WlaSearchForm) => {
    setSearchFormValues(values);
    history.push({
      pathname: RoutesPath.Outbound,
    });
  };

  useEffect(() => {
    resetSelectedQuotes();
  }, [resetSelectedQuotes]);

  return (
    <SearchForm
      searchFormValues={searchFormValues || initSearchForm}
      submitSearchForm={submitSearchForm}
      resetSearchForm={resetSearchFromValues}
      locale={locale}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
