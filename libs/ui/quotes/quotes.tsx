import { Typography } from '@material-ui/core';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import { QuotePerLegInterface } from '@white-label-airline/services/quotes';
import { FetchStatus } from '@white-label-airline/store';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import LoadingFetchStatus from '../loading-fetch-status/loading-fetch-status';

import QuotesList from './components/quotes-list/quotes-list';
import {
  QuotesProps,
  mapStateToProps,
  mapDispatchToProps,
} from './quotes.props';

const Quotes: React.FunctionComponent<QuotesProps> = ({
  quotes,
  queryParams,
  modifySearch,
  getQuotes,
  quotesFetchStatus,
  isOutbound,
  selectOutboundQuote,
  selectInboundQuote,
  selectQuote,
}: QuotesProps) => {
  const { t } = useTranslation();
  const language = getCurrentLanguage();
  const [quotesList, setQuotesList] = useState<QuotePerLegInterface[]>([]);

  useEffect(() => {
    if (queryParams) {
      getQuotes({
        ...queryParams,
        isOutbound,
      });
    }
  }, [getQuotes, queryParams, isOutbound]);

  useEffect(() => {
    if (quotesFetchStatus === FetchStatus.Success) {
      setQuotesList(isOutbound ? quotes.outbound : quotes.inbound);
    }
  }, [isOutbound, quotes, quotesFetchStatus]);

  const onSelectQuote = (quote) => {
    if (isOutbound) {
      selectOutboundQuote(quote);
    } else {
      selectInboundQuote(quote);
    }
    selectQuote(quote);
  };

  return (
    <LoadingFetchStatus fetchStatus={quotesFetchStatus}>
      <Typography gutterBottom variant="h6" component="h3">
        {t(
          isOutbound ? 'quotes.selectDepartFlight' : 'quotes.selectReturnFlight'
        )}{' '}
        :
      </Typography>
      <QuotesList
        language={language}
        currency={queryParams?.currency}
        modifySearch={modifySearch}
        quotes={quotesList}
        selectQuote={onSelectQuote}
      />
    </LoadingFetchStatus>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
