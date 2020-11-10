import React from 'react';
import { List, Divider } from '@material-ui/core';
import { QuotePerLegInterface } from '@white-label-airline/services/quotes';

import Quote from '../../../quote/quote';
import NoFlightsFound from '../no-flights-found/no-flight-found';
import QuoteHeader from '../quote-header/quote-header';

import { QuotesListProps } from './quotes-list.props';

const QuotesList: React.FunctionComponent<QuotesListProps> = ({
  quotes,
  currency,
  language,
  modifySearch,
  selectQuote,
}: QuotesListProps) => {
  return quotes && quotes.length ? (
    <List>
      {quotes.map((quote) => {
        return (
          <div key={quote.id}>
            <Quote
              quote={quote}
              onQuoteClick={selectQuote}
              header={
                <QuoteHeader
                  quote={quote}
                  language={language}
                  currency={currency}
                  buttonClick={selectQuote}
                />
              }
            />
            <Divider />
          </div>
        );
      })}
    </List>
  ) : (
    <NoFlightsFound modifySearch={modifySearch} />
  );
};

export default QuotesList;
