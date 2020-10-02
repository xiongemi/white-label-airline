// carriers
// direct not direct
// price

import React from 'react';
import { Button, Grid, Box } from '@material-ui/core';
import { QuoteProps } from './quote.props';

const Quote: React.FunctionComponent<QuoteProps> = ({
  quote,
  carriers,
}: QuoteProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        {carriers[quote.]}
      </Grid>
    </Grid>
  );
};
