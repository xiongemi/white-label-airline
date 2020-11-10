import React from 'react';
import { getCurrentLanguage } from '@white-label-airline/services/i18n';
import { connect } from 'react-redux';
import { Divider, List } from '@material-ui/core';

import { QuotePerLegInterface } from '@white-label-airline/services/quotes';
import Quote from '../quote/quote';
import Loading from '../loading';

import { SelectedQuotesProps, mapStateToProps } from './selected-quotes.props';
import { searchFormDataTransform } from '../search-form/search-form.data-transform';
import SelectedQuoteHeader from './selected-quote-header/selected-quote-header';

const SelectedQuotes: React.FunctionComponent<SelectedQuotesProps> = ({
  selectedQuotes,
  queryParams,
  modifyOutboundQuote,
  modifyInboundQuote,
}: SelectedQuotesProps) => {
  const language = getCurrentLanguage();
  return queryParams && selectedQuotes ? (
    <List>
      <Quote
        quote={selectedQuotes.outbound}
        header={
          <SelectedQuoteHeader
            quote={selectedQuotes.outbound}
            language={language}
            currency={queryParams?.currency}
            date={searchFormDataTransform.parseQueryParamsDate(
              queryParams?.departDate
            )}
            buttonClick={modifyOutboundQuote}
          />
        }
      />
      <Divider />
      {selectedQuotes.inbound && (
        <>
          <Quote
            quote={selectedQuotes.inbound}
            header={
              <SelectedQuoteHeader
                quote={selectedQuotes.inbound}
                language={language}
                currency={queryParams?.currency}
                date={searchFormDataTransform.parseQueryParamsDate(
                  queryParams?.returnDate
                )}
                buttonClick={modifyInboundQuote}
              />
            }
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
