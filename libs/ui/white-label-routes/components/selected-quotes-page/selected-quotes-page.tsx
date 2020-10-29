import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import SelectedQuotes from '../../../selected-quotes';
import { QuotesQueryParams } from '../../../models/quotes-query-params.interface';
import { RoutesPath } from '../../models/routes-path.enum';

const SelectedQuotesPage: React.FunctionComponent = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [queryParams, setQueryParams] = useState<QuotesQueryParams>();

  useEffect(() => {
    setQueryParams((parse(search) as unknown) as QuotesQueryParams);
  }, [search]);

  const modifyOutboundQuote = () => {
    history.push({
      pathname: RoutesPath.Outbound,
      search: search,
    });
  };

  const modifyInboundQuote = () => {
    history.push({
      pathname: RoutesPath.Inbound,
      search: search,
    });
  };

  return (
    <SelectedQuotes
      queryParams={queryParams}
      modifyOutboundQuote={modifyOutboundQuote}
      modifyInboundQuote={modifyInboundQuote}
    />
  );
};

export default SelectedQuotesPage;
