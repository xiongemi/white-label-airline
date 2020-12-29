import { Grid, Typography, Button, Box } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { QuoteHeaderProps } from './quote-header.props';

const QuoteHeader: React.FunctionComponent<QuoteHeaderProps> = ({
  quote,
  language,
  currency,
  buttonClick,
}: QuoteHeaderProps) => {
  const { t } = useTranslation();

  const onButtonClick = (event) => {
    event.stopPropagation();
    buttonClick(quote);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} md={2}>
        <Box display="flex" alignItems="center" height={1}>
          <Typography variant="subtitle1">
            {quote.carriers.join(', ')}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box display="flex" alignItems="center" height={1}>
          <Typography variant="subtitle2">
            {quote.origin.code} - {quote.destination.code}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box display="flex" alignItems="center" height={1}>
          <Typography variant="subtitle2">
            {t(quote.direct ? 'quotes.direct' : 'quotes.layover')}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box display="flex" alignItems="center" height={1}>
          <Typography variant="body1">
            {new Intl.NumberFormat(language, {
              style: 'currency',
              currency,
            }).format(quote.minPrice)}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={1}
        >
          <Button onClick={onButtonClick} color="primary">
            {t('quote.selectFlight')}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default QuoteHeader;
