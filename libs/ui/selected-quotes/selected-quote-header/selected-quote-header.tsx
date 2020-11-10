import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

import { SelectedQuoteHeaderProps } from './selected-quote-header.props';

const SelectedQuoteHeader: React.FunctionComponent<SelectedQuoteHeaderProps> = ({
  quote,
  language,
  currency,
  buttonClick,
  date,
}: SelectedQuoteHeaderProps) => {
  const { t } = useTranslation();

  const onButtonClick = (event) => {
    event.stopPropagation();
    buttonClick(quote);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} md={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={1}
        >
          <Typography variant="subtitle1">
            {format(date, 'E, MMM d')}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={1}
        >
          <Typography variant="subtitle1">
            {quote.carriers.join(', ')}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height={1}
        >
          <Typography variant="subtitle2">
            {quote.origin.IataCode} - {quote.destination.IataCode}
          </Typography>
          <Typography variant="subtitle2">
            {t(quote.direct ? 'quotes.direct' : 'quotes.layover')}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={1}
        >
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
            {t('quote.changeFlight')}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SelectedQuoteHeader;
