import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';
import { WlaTripType } from '@white-label-airline/models/search-form';
import { searchFormDataTransform } from '@white-label-airline/store/search-form';
import LoadingFetchStatus from '@white-label-airline/ui/loading-fetch-status';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import Quotes from '../../../quotes';
import { BreadcrumbLink, SearchBreadcrumbs } from '../../../search-breadcrumbs';
import {
  inboundBreadcrumb,
  outboundBreadcrumb,
  searchBreadcrumb,
} from '../../models/breadcrumbs.const';
import { RoutesPath } from '../../models/routes-path.enum';

import {
  QuotesPageProps,
  mapStateToProps,
  mapDispatchToProps,
} from './quotes-page.props';

const QuotesPage: React.FunctionComponent<QuotesPageProps> = ({
  searchForm,
  selectedQuotes,
  quotes,
  quotesFetchStatus,
  getQuotes,
  selectOutboundQuote,
  selectInboundQuote,
  language,
}: QuotesPageProps) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isOutbound, setIsOutbound] = useState<boolean>(true);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbLink[]>([]);

  useEffect(() => {
    if (searchForm) {
      getQuotes(
        searchFormDataTransform.transfromSearchFormValueToGetQuotesPayload(
          searchForm,
          isOutbound
        )
      );
    }
  }, [getQuotes, searchForm, isOutbound]);

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
    });
  };

  const onSelectOutboundQuotes = (quote: WlaQuotePerLeg) => {
    selectOutboundQuote(quote);
    if (
      searchForm.tripType === WlaTripType.RoundTrip &&
      isOutbound &&
      !selectedQuotes.inbound
    ) {
      history.push({
        pathname: RoutesPath.Inbound,
      });
    } else {
      history.push({
        pathname: RoutesPath.Booking,
      });
    }
  };

  const onSelectInboundQuotes = (quote: WlaQuotePerLeg) => {
    selectInboundQuote(quote);
    history.push({
      pathname: RoutesPath.Booking,
    });
  };

  return searchForm ? (
    <>
      {breadcrumbs && breadcrumbs.length && (
        <SearchBreadcrumbs breadcrumbs={breadcrumbs} />
      )}
      <LoadingFetchStatus fetchStatus={quotesFetchStatus}>
        <Quotes
          searchForm={searchForm}
          quotes={quotes}
          modifySearch={modifySearch}
          isOutbound={isOutbound}
          selectOutboundQuote={onSelectOutboundQuotes}
          selectInboundQuote={onSelectInboundQuotes}
          language={language}
        />
      </LoadingFetchStatus>
    </>
  ) : (
    <Redirect to={RoutesPath.Search} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesPage);
