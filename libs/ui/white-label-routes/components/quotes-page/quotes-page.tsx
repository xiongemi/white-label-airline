import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Quotes from '../../../quotes';
import { RoutesPath } from '../../models/routes-path.enum';
import { useQueryParamsAsSearchForm } from '../../../../ui/hooks/use-query-params.hook';

const QuotesPage: React.FunctionComponent = () => {
  const history = useHistory();
  const { search, pathname } = useLocation();
  const [isOutbound, setIsOutbound] = useState<boolean>();

  const { queryParams } = useQueryParamsAsSearchForm();

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
