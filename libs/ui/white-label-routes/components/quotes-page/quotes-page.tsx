import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import Quotes from '../../../quotes';
import { QuotesQueryParams } from '../../../models/quotes-query-params.interface';
import { RoutesPath } from '../../models/routes-path.enum';

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
        search,
      });
    } else {
      history.push({
        pathname: RoutesPath.Booking,
        search,
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
