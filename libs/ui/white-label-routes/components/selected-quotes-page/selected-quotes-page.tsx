import { WlaTripType } from '@white-label-airline/models/search-form';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { BreadcrumbLink, SearchBreadcrumbs } from '../../../search-breadcrumbs';
import SelectedQuotes from '../../../selected-quotes';
import {
  bookingBreadcrumb,
  inboundBreadcrumb,
  outboundBreadcrumb,
  searchBreadcrumb,
} from '../../models/breadcrumbs.const';
import { RoutesPath } from '../../models/routes-path.enum';

import {
  mapStateToProps,
  SelectedQuotesPageProps,
} from './selected-quotes-page.props';

const SelectedQuotesPage: React.FunctionComponent<SelectedQuotesPageProps> = ({
  searchForm,
  selectedQuotes,
  language,
}: SelectedQuotesPageProps) => {
  const history = useHistory();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbLink[]>([]);

  useEffect(() => {
    setBreadcrumbs(
      searchForm.tripType === WlaTripType.RoundTrip
        ? [
            searchBreadcrumb,
            outboundBreadcrumb,
            inboundBreadcrumb,
            bookingBreadcrumb,
          ]
        : [searchBreadcrumb, outboundBreadcrumb, bookingBreadcrumb]
    );
  }, [searchForm]);

  const modifyOutboundQuote = () => {
    history.push({
      pathname: RoutesPath.Outbound,
    });
  };

  const modifyInboundQuote = () => {
    history.push({
      pathname: RoutesPath.Inbound,
    });
  };

  return searchForm && selectedQuotes && selectedQuotes.outbound ? (
    <>
      {breadcrumbs && breadcrumbs.length && (
        <SearchBreadcrumbs breadcrumbs={breadcrumbs} />
      )}
      <SelectedQuotes
        searchForm={searchForm}
        selectedQuotes={selectedQuotes}
        modifyOutboundQuote={modifyOutboundQuote}
        modifyInboundQuote={modifyInboundQuote}
        language={language}
      />
    </>
  ) : (
    <Redirect to={RoutesPath.Search} />
  );
};

export default connect(mapStateToProps, null)(SelectedQuotesPage);
