import { Typography } from '@material-ui/core';
import React from 'react';

import { QuoteDetailsProps } from './quote-details.props';

const QuoteDetails: React.FunctionComponent<QuoteDetailsProps> = ({
  quote,
}: QuoteDetailsProps) => {
  return (
    <>
      <Typography variant="body2">
        {quote.origin.cityName} ({quote.origin.code})
      </Typography>
      <Typography variant="body2">
        {quote.destination.cityName} ({quote.destination.code})
      </Typography>
    </>
  );
};

export default QuoteDetails;
