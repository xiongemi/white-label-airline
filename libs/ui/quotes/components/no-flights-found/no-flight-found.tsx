import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button, Box } from '@material-ui/core';

import { NoFilghtsFoundProps } from './no-flight-found.props';

const NoFlightsFound: React.FunctionComponent<NoFilghtsFoundProps> = ({
  modifySearch,
}: NoFilghtsFoundProps) => {
  const { t } = useTranslation();

  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        {t('quotes.noFlightsFound.title')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t('quotes.noFlightsFound.description')}
      </Typography>
      <Box mt={3}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            modifySearch && modifySearch();
          }}
        >
          {t('quotes.modifySearch')}
        </Button>
      </Box>
    </Box>
  );
};

export default NoFlightsFound;
