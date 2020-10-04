// carriers
// direct not direct
// price

import React from 'react';
import { Grid } from '@material-ui/core';

import { QuoteProps } from './quote.props';

const Quote: React.FunctionComponent<QuoteProps> = ({ quote }: QuoteProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        {quote.carriers.join(', ')}
      </Grid>
      <Grid item xs={4}>
        {quote.direct}
      </Grid>
      <Grid item xs={4}>
        {quote.minPrice}
      </Grid>
    </Grid>
  );
};

export default Quote;
