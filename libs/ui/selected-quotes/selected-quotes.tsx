import { Divider, List } from '@material-ui/core';
import React from 'react';

import Quote from '../quote/quote';

import SelectedQuoteHeader from './components/selected-quote-header/selected-quote-header';
import SelectedQuotesSummary from './components/selected-quotes-summary/selected-quotes-summary';
import { SelectedQuotesProps } from './selected-quotes.props';

const SelectedQuotes: React.FunctionComponent<SelectedQuotesProps> = ({
  selectedQuotes,
  searchForm,
  modifyOutboundQuote,
  modifyInboundQuote,
  language,
}: SelectedQuotesProps) => {
  return (
    <>
      <SelectedQuotesSummary
        searchForm={searchForm}
        language={language}
        currency={searchForm.currency?.code}
        selectedQuotes={selectedQuotes}
      />
      <List>
        {selectedQuotes.outbound && (
          <>
            <Quote
              quote={selectedQuotes.outbound}
              header={
                <SelectedQuoteHeader
                  quote={selectedQuotes.outbound}
                  language={language}
                  currency={searchForm.currency?.code}
                  date={searchForm.departDate}
                  buttonClick={modifyOutboundQuote}
                />
              }
            />
            <Divider />
          </>
        )}
        {selectedQuotes.inbound && (
          <>
            <Quote
              quote={selectedQuotes.inbound}
              header={
                <SelectedQuoteHeader
                  quote={selectedQuotes.inbound}
                  language={language}
                  currency={searchForm?.currency?.code}
                  date={searchForm?.returnDate}
                  buttonClick={modifyInboundQuote}
                />
              }
            />
            <Divider />
          </>
        )}
      </List>
    </>
  );
};

export default SelectedQuotes;
