import React, { useEffect, useState } from 'react';
import Quotes from '@white-label-airline/ui/quotes';
import { useHistory, useLocation } from 'react-router-dom';
import { GetQuotesPayload } from '@white-label-airline/store';
import { parse } from 'query-string';

const QuotesPage: React.FunctionComponent = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [queryParams, setQueryParams] = useState<GetQuotesPayload>();

  const modifySearch = () => {
    history.push({
      pathname: '/search',
      search: search,
    });
  };

  useEffect(() => {
    setQueryParams((parse(search) as unknown) as GetQuotesPayload);
  }, [search]);

  return <Quotes modifySearch={modifySearch} getQuotesPayload={queryParams} />;
};

export default QuotesPage;
