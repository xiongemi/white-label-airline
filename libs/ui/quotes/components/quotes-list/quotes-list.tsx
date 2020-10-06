import React from 'react';
import { List, Divider } from '@material-ui/core';

import Quote from '../quote/quote';
import NoFlightsFound from '../no-flights-found/no-flight-found';

import { QuotesListProps } from './quotes-list.props';

const QuotesList: React.FunctionComponent<QuotesListProps> = ({
  quotes,
  currency,
  language,
  modifySearch,
}: QuotesListProps) => {
  return quotes && quotes.length ? (
    <List>
      {quotes.map((quote) => {
        return (
          <>
            <Quote quote={quote} currency={currency} language={language} />
            <Divider />
          </>
        );
      })}
    </List>
  ) : (
    <NoFlightsFound modifySearch={modifySearch} />
  );
};

export default QuotesList;
