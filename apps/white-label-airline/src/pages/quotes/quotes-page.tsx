import React from 'react';
import QuotesList from '@white-label-airline/ui/quotes-list';
import { useHistory } from 'react-router-dom';

const QuotesPage: React.FunctionComponent<{}> = () => {
  const history = useHistory();

  const modifySearch = () => {
    history.push('/search');
  };

  return <QuotesList modifySearch={modifySearch} />;
};

export default QuotesPage;
