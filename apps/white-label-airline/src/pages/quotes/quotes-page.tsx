import React, { useEffect, useState } from 'react';
import Quotes, { QuotesQueryParams } from '@white-label-airline/ui/quotes';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import { RoutesPath } from '../../app/routes-path.enum';

const QuotesPage: React.FunctionComponent = () => {
  const history = useHistory();
  const { search, pathname } = useLocation();
  const [queryParams, setQueryParams] = useState<QuotesQueryParams>();
  const [isOutbound, setIsOutbound] = useState<boolean>();

  useEffect(() => {
    setQueryParams((parse(search) as unknown) as QuotesQueryParams);
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
      queryParams={queryParams}
      isOutbound={isOutbound}
      selectQuote={selectQuote}
    />
  );
};

export default QuotesPage;
