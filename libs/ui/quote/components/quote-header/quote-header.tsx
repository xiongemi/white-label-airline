import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { QuoteHeaderProps } from './quote-header.props';

const QuoteHeader: React.FunctionComponent<QuoteHeaderProps> = ({
  quote,
  language,
  currency,
  buttonText,
  buttonClick,
}: QuoteHeaderProps) => {
  const { t } = useTranslation();

  const onButtonClick = (event) => {
    event.stopPropagation();
    buttonClick(quote);
  };

  return (
    <Grid container spacing={3}>
      <Grid item sm={2}>
        <Typography variant="subtitle1">{quote.carriers.join(', ')}</Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography variant="subtitle2">
          {quote.origin.IataCode} - {quote.destination.IataCode}
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography variant="subtitle2">
          {t(quote.direct ? 'quotes.direct' : 'quotes.layover')}
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography variant="body1">
          {new Intl.NumberFormat(language, {
            style: 'currency',
            currency,
          }).format(quote.minPrice)}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </Grid>
    </Grid>
  );
};

export default QuoteHeader;
