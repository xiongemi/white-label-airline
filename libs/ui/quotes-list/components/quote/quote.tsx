import React from 'react';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { QuoteProps } from './quote.props';

const Quote: React.FunctionComponent<QuoteProps> = ({
  quote,
  language,
  currency,
}: QuoteProps) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        {quote.carriers.join(', ')}
      </Grid>
      <Grid item xs={4}>
        {t(quote.direct ? 'quotes.direct' : 'quotes.layover')}
      </Grid>
      <Grid item xs={4}>
        {new Intl.NumberFormat(language, {
          style: 'currency',
          currency,
        }).format(quote.minPrice)}
      </Grid>
    </Grid>
  );
};

export default Quote;
