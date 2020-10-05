import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { GetQuotesPayload } from '@white-label-airline/store';

import {
  QuotesListProps,
  mapStateToProps,
  mapDispatchToProps,
} from './quotes-list.props';
import Quote from './components/quote/quote';
import NoFlightsFound from './components/no-flights-found/no-flight-found';

const QuotesList: React.FunctionComponent<QuotesListProps> = ({
  quotes,
  modifySearch,
  language,
  getQuotes,
  quotesFetchStatus,
}: QuotesListProps) => {
  const { search } = useLocation();
  const [queryParams, setQueryParams] = useState<GetQuotesPayload>();

  useEffect(() => {
    setQueryParams((parse(search) as unknown) as GetQuotesPayload);
  }, [search]);

  useEffect(() => {
    if (queryParams) {
      getQuotes(queryParams);
    }
  }, [getQuotes, queryParams]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {quotes.outbound && quotes.outbound.length ? (
        quotes.outbound.map((quote) => {
          return (
            <Quote
              quote={quote}
              currency={queryParams?.currency}
              language={language}
            />
          );
        })
      ) : (
        <NoFlightsFound modifySearch={modifySearch} />
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesList);
