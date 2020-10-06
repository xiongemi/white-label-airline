import React, { useState, useEffect } from 'react';
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
  getQuotesPayload,
  modifySearch,
  language,
  getQuotes,
  quotesFetchStatus,
}: QuotesProps) => {
  const [isOutbound, setIsOutbound] = useState<boolean>(true);

  useEffect(() => {
    if (getQuotesPayload) {
      getQuotesPayload.isOutbound = isOutbound;
      getQuotes(getQuotesPayload);
    }
  }, [getQuotes, getQuotesPayload, isOutbound]);

  return (
    <LoadingFetchStatus fetchStatus={quotesFetchStatus}>
      <QuotesList
        language={language}
        currency={getQuotesPayload?.currency}
        modifySearch={modifySearch}
        quotes={isOutbound ? quotes.outbound : quotes.inbound}
      />
    </LoadingFetchStatus>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
