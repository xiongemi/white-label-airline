import React, { useEffect, useState } from 'react';
import Quotes from '@white-label-airline/ui/quotes';
import { useHistory, useLocation } from 'react-router-dom';
import { GetQuotesPayload } from '@white-label-airline/store';
import { parse } from 'query-string';

import { RoutesPath } from '../../app/routes-path.enum';

const QuotesPage: React.FunctionComponent = () => {
  const history = useHistory();
  const { search, pathname } = useLocation();
  const [queryParams, setQueryParams] = useState<GetQuotesPayload>();
  const [isOutbound, setIsOutbound] = useState<boolean>();

  useEffect(() => {
    setQueryParams((parse(search) as unknown) as GetQuotesPayload);
  }, [search]);

  useEffect(() => {
    setIsOutbound(pathname === RoutesPath.Outbound);
  }, [pathname]);

  const modifySearch = () => {
    history.push({
      pathname: RoutesPath.Search,
      search: search,
    });
  };

  const selectQuote = () => {
    if (queryParams.returnDate && isOutbound) {
      history.push({
        pathname: RoutesPath.Inbound,
        search: search,
      });
    }
  };

  return (
    <Quotes
      modifySearch={modifySearch}
      getQuotesPayload={queryParams}
      isOutbound={isOutbound}
      selectQuote={selectQuote}
    />
  );
};

export default QuotesPage;
