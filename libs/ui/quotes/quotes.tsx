import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';

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
  getQuotes,
  quotesFetchStatus,
  isOutbound,
  selectQuote,
}: QuotesProps) => {
  const { t } = useTranslation();
  const language = getCurrentLanguage();

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
      <Typography gutterBottom variant="h6" component="h3">
        {t(
          isOutbound
            ? 'quotes.selectDepartingFlights'
            : 'quotes.selectReturnFlights'
        )}{' '}
        :
      </Typography>
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
