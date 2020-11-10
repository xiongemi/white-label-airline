import { Typography } from '@material-ui/core';
import React from 'react';

import { QuoteDetailsProps } from './quote-details.props';

const QuoteDetails: React.FunctionComponent<QuoteDetailsProps> = ({
  quote,
}: QuoteDetailsProps) => {
  return (
    <>
      <Typography variant="body2">
        {quote.origin.CityName} ({quote.origin.IataCode})
      </Typography>
      <Typography variant="body2">
        {quote.destination.CityName} ({quote.destination.IataCode})
      </Typography>
    </>
  );
};

export default QuoteDetails;
