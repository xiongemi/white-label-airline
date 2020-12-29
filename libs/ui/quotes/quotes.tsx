import { Typography } from '@material-ui/core';
import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import { FetchStatus } from '@white-label-airline/store/models';
import { searchFormDataTransform } from '@white-label-airline/store/search-form';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LoadingFetchStatus from '../loading-fetch-status/loading-fetch-status';

import QuotesList from './components/quotes-list/quotes-list';
import { QuotesProps } from './quotes.props';

const Quotes: React.FunctionComponent<QuotesProps> = ({
  quotes,
  searchForm,
  modifySearch,
  getQuotes,
  quotesFetchStatus,
  isOutbound,
  selectOutboundQuote,
  selectInboundQuote,
}: QuotesProps) => {
  const { t } = useTranslation();
  const language = getCurrentLanguage();
  const [quotesList, setQuotesList] = useState<WlaQuotePerLeg[]>([]);

  useEffect(() => {
    if (searchForm) {
      getQuotes(
        searchFormDataTransform.transfromSearchFormValueToGetQuotesPayload(
          searchForm,
          isOutbound
        )
      );
    }
  }, [getQuotes, searchForm, isOutbound]);

  useEffect(() => {
    if (quotesFetchStatus === FetchStatus.Success) {
      setQuotesList(isOutbound ? quotes.outbound : quotes.inbound);
    }
  }, [isOutbound, quotes, quotesFetchStatus]);

  const onSelectQuote = (quote: WlaQuotePerLeg) => {
    if (isOutbound) {
      selectOutboundQuote(quote);
    } else {
      selectInboundQuote(quote);
    }
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
        currency={searchForm?.currency?.code}
        modifySearch={modifySearch}
        quotes={quotesList}
        selectQuote={onSelectQuote}
      />
    </LoadingFetchStatus>
  );
};

export default Quotes;
