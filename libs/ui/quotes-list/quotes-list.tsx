import React from 'react';
import { connect } from 'react-redux';

import {
  QuotesListProps,
  mapStateToProps,
  mapDispatchToProps,
} from './quotes-list.props';
import Quote from './components/quote';

const QuotesList: React.FunctionComponent<QuotesListProps> = ({
  quotes,
}: QuotesListProps) => {
  return (
    <>
      {quotes.outbound.map((quote) => {
        return <Quote quote={quote} />;
      })}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesList);
