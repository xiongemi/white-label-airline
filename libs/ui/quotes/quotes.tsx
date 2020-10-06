import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LoadingFetchStatus from '../loading-fetch-status/loading-fetch-status';

import {
  QuotesProps,
  mapStateToProps,
  mapDispatchToProps,
} from './quotes.props';
import QuotesList from './components/quotes-list/quotes-list';

const Quotes: React.FunctionComponent<QuotesProps> = ({
  quotes,
  queryParams,
  modifySearch,
  language,
  getQuotes,
  quotesFetchStatus,
  isOutbound,
  selectQuote,
}: QuotesProps) => {
  useEffect(() => {
    if (queryParams) {
      getQuotes({
        ...queryParams,
        isOutbound,
      });
    }
  }, [getQuotes, queryParams, isOutbound]);

  return (
    <LoadingFetchStatus fetchStatus={quotesFetchStatus}>
      <QuotesList
        language={language}
        currency={queryParams?.currency}
        modifySearch={modifySearch}
        quotes={isOutbound ? quotes.outbound : quotes.inbound}
        selectQuote={selectQuote}
      />
    </LoadingFetchStatus>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
