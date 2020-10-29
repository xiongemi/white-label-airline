import React from 'react';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Quote from '../quote/quote';
import Loading from '../loading';

import { SelectedQuotesProps, mapStateToProps } from './selected-quotes.props';

const SelectedQuotes: React.FunctionComponent<SelectedQuotesProps> = ({
  selectedQuotes,
  queryParams,
  modifyOutboundQuote,
  modifyInboundQuote,
}: SelectedQuotesProps) => {
  const language = getCurrentLanguage();
  const { t } = useTranslation();

  return queryParams && selectedQuotes ? (
    <>
      <Quote
        language={language}
        currency={queryParams?.currency}
        quote={selectedQuotes.outbound}
        headerButtonText={t('quote.changeFlight')}
        headerButtonClick={modifyOutboundQuote}
      />
      {selectedQuotes.inbound && (
        <Quote
          language={language}
          currency={queryParams?.currency}
          quote={selectedQuotes.inbound}
          headerButtonText={t('quote.changeFlight')}
          headerButtonClick={modifyInboundQuote}
        />
      )}
    </>
  ) : (
    <Loading />
  );
};

export default connect(mapStateToProps, null)(SelectedQuotes);
