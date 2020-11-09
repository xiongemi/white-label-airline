import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import SelectedQuotes from '../../../selected-quotes';
import { QuotesQueryParams } from '../../../models/quotes-query-params.interface';
import { RoutesPath } from '../../models/routes-path.enum';
import {
  bookingBreadcrumb,
  inboundBreadcrumb,
  outboundBreadcrumb,
  searchBreadcrumb,
} from '../../models/breadcrumbs.const';
import { BreadcrumbLink, SearchBreadcrumbs } from '../../../search-breadcrumbs';

const SelectedQuotesPage: React.FunctionComponent = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [queryParams, setQueryParams] = useState<QuotesQueryParams>();
  const [isRoundtrip, setIsRoundtrip] = useState<boolean>(true);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbLink[]>([]);

  useEffect(() => {
    setQueryParams((parse(search) as unknown) as QuotesQueryParams);
  }, [search]);

  useEffect(() => {
    if (queryParams) {
      setIsRoundtrip(Boolean(queryParams.returnDate));
    }
  }, [queryParams]);

  useEffect(() => {
    setBreadcrumbs(
      isRoundtrip
        ? [
            searchBreadcrumb,
            outboundBreadcrumb,
            inboundBreadcrumb,
            bookingBreadcrumb,
          ]
        : [searchBreadcrumb, outboundBreadcrumb, bookingBreadcrumb]
    );
  }, [isRoundtrip]);

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
    <>
      {breadcrumbs && breadcrumbs.length && (
        <SearchBreadcrumbs breadcrumbs={breadcrumbs} />
      )}
      <SelectedQuotes
        queryParams={queryParams}
        modifyOutboundQuote={modifyOutboundQuote}
        modifyInboundQuote={modifyInboundQuote}
      />
    </>
  );
};

export default SelectedQuotesPage;
