import { Typography } from '@material-ui/core';
import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import QuotesList from './components/quotes-list/quotes-list';
import { QuotesProps } from './quotes.props';

const Quotes: React.FunctionComponent<QuotesProps> = ({
  quotes,
  searchForm,
  modifySearch,
  isOutbound,
  selectOutboundQuote,
  selectInboundQuote,
  language,
}: QuotesProps) => {
  const { t } = useTranslation();
  const [quotesList, setQuotesList] = useState<WlaQuotePerLeg[]>([]);

  useEffect(() => {
    setQuotesList(isOutbound ? quotes.outbound : quotes.inbound);
  }, [isOutbound, quotes]);

  const onSelectQuote = (quote: WlaQuotePerLeg) => {
    if (isOutbound) {
      selectOutboundQuote(quote);
    } else {
      selectInboundQuote(quote);
    }
  };

  return (
    <>
      <Typography gutterBottom variant="h6" component="h3">
        {t(
          isOutbound ? 'quotes.selectDepartFlight' : 'quotes.selectReturnFlight'
        )}{' '}
        :
      </Typography>
      <QuotesList
        language={language}
        currency={searchForm?.currency?.code}
        modifySearch={modifySearch}
        quotes={quotesList}
        selectQuote={onSelectQuote}
      />
    </>
  );
};

export default Quotes;
