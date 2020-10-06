import React from 'react';
import QuotesList from '@white-label-airline/ui/quotes-list';
import { useHistory, useLocation } from 'react-router-dom';

const QuotesPage: React.FunctionComponent = () => {
  const history = useHistory();
  const { search } = useLocation();

  const modifySearch = () => {
    history.push({
      pathname: '/search',
      search: search,
    });
  };

  return <QuotesList modifySearch={modifySearch} />;
};

export default QuotesPage;
