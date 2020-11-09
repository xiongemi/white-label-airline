import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useQueryParamsAsSearchForm } from '../../../hooks/use-query-params.hook';
import Quotes from '../../../quotes';
import { RoutesPath } from '../../models/routes-path.enum';
import { BreadcrumbLink, SearchBreadcrumbs } from '../../../search-breadcrumbs';
import {
  inboundBreadcrumb,
  outboundBreadcrumb,
  searchBreadcrumb,
} from '../../models/breadcrumbs.const';

const QuotesPage: React.FunctionComponent = () => {
  const history = useHistory();
  const { search, pathname } = useLocation();
  const [isOutbound, setIsOutbound] = useState<boolean>(true);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbLink[]>([]);

  const { queryParams } = useQueryParamsAsSearchForm();

  useEffect(() => {
    setIsOutbound(pathname === RoutesPath.Outbound);
  }, [pathname]);

  useEffect(() => {
    setBreadcrumbs(
      isOutbound
        ? [searchBreadcrumb, outboundBreadcrumb]
        : [searchBreadcrumb, outboundBreadcrumb, inboundBreadcrumb]
    );
  }, [isOutbound]);

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
    <>
      {breadcrumbs && breadcrumbs.length && (
        <SearchBreadcrumbs breadcrumbs={breadcrumbs} />
      )}
      <Quotes
        modifySearch={modifySearch}
        queryParams={queryParams}
        isOutbound={isOutbound}
        selectQuote={selectQuote}
      />
    </>
  );
};

export default QuotesPage;
