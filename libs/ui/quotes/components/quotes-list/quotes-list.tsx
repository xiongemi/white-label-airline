import React from 'react';
import { List, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Quote from '../../../quote/quote';
import NoFlightsFound from '../no-flights-found/no-flight-found';

import { QuotesListProps } from './quotes-list.props';

const QuotesList: React.FunctionComponent<QuotesListProps> = ({
  quotes,
  currency,
  language,
  modifySearch,
  selectQuote,
}: QuotesListProps) => {
  const { t } = useTranslation();

  return quotes && quotes.length ? (
    <List>
      {quotes.map((quote) => {
        return (
          <div key={quote.id}>
            <Quote
              quote={quote}
              currency={currency}
              language={language}
              selectQuote={selectQuote}
              headerButtonText={t('quote.selectFlight')}
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
