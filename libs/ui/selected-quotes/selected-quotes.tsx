import React from 'react';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Divider, List } from '@material-ui/core';

import Quote from '../quote/quote';
import Loading from '../loading';

import { SelectedQuotesProps, mapStateToProps } from './selected-quotes.props';
import { searchFormDataTransform } from '../search-form/search-form.data-transform';

const SelectedQuotes: React.FunctionComponent<SelectedQuotesProps> = ({
  selectedQuotes,
  queryParams,
  modifyOutboundQuote,
  modifyInboundQuote,
}: SelectedQuotesProps) => {
  const language = getCurrentLanguage();
  const { t } = useTranslation();

  return queryParams && selectedQuotes ? (
    <List>
      <Quote
        language={language}
        currency={queryParams?.currency}
        quote={selectedQuotes.outbound}
        headerButtonText={t('quote.changeFlight')}
        headerButtonClick={modifyOutboundQuote}
        date={searchFormDataTransform.parseQueryParamsDate(
          queryParams?.departDate
        )}
      />
      <Divider />
      {selectedQuotes.inbound && (
        <>
          <Quote
            language={language}
            currency={queryParams?.currency}
            quote={selectedQuotes.inbound}
            headerButtonText={t('quote.changeFlight')}
            headerButtonClick={modifyInboundQuote}
            date={searchFormDataTransform.parseQueryParamsDate(
              queryParams?.returnDate
            )}
          />
          <Divider />
        </>
      )}
    </List>
  ) : (
    <Loading />
  );
};

export default connect(mapStateToProps, null)(SelectedQuotes);
