import { Box, Grid, Typography } from '@material-ui/core';
import { WlaTripType } from '@white-label-airline/models/search-form';
import { IsScreenSizeXs } from '@white-label-airline/ui/hooks/screen-size.hook';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectedQuotesSummaryProps } from './selected-quotes-summary.props';

const SelectedQuotesSummary: React.FunctionComponent<SelectedQuotesSummaryProps> = ({
  selectedQuotes,
  searchForm,
  language,
  currency,
}: SelectedQuotesSummaryProps) => {
  const [totalPrice, setTotalPrice] = useState<number>();

  const isScreenSizeXs = IsScreenSizeXs();

  const { t } = useTranslation();

  useEffect(() => {
    setTotalPrice(
      selectedQuotes.inbound
        ? selectedQuotes.outbound.minPrice + selectedQuotes.inbound.minPrice
        : selectedQuotes.outbound.minPrice
    );
  }, [selectedQuotes]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography>
          {t(
            searchForm.tripType === WlaTripType.RoundTrip
              ? 'search.roundTrip'
              : 'search.oneWay'
          )}
        </Typography>
        <Typography variant="h4">
          {selectedQuotes.outbound.origin.CityName} -{' '}
          {selectedQuotes.outbound.destination.CityName}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box textAlign={isScreenSizeXs ? 'left' : 'right'}>
          <Typography>{t('quotes.totalPriceFrom')}</Typography>
          <Typography variant="h4">
            {new Intl.NumberFormat(language, {
              style: 'currency',
              currency,
            }).format(totalPrice)}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SelectedQuotesSummary;
