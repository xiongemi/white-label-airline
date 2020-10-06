import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { QuoteHeaderProps } from './quote-header.props';

const QuoteHeader: React.FunctionComponent<QuoteHeaderProps> = ({
  quote,
  language,
  currency,
}: QuoteHeaderProps) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Typography variant="subtitle1">{quote.carriers.join(', ')}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle2">
          {quote.origin.IataCode} - {quote.destination.IataCode}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle2">
          {t(quote.direct ? 'quotes.direct' : 'quotes.layover')}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1">
          {new Intl.NumberFormat(language, {
            style: 'currency',
            currency,
          }).format(quote.minPrice)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default QuoteHeader;
