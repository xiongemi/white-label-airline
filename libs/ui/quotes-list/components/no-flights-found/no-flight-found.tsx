import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from '@material-ui/core';

import { NoFilghtsFoundProps } from './no-flight-found.props';

const NoFlightsFound: React.FunctionComponent<NoFilghtsFoundProps> = ({
  modifySearch,
}: NoFilghtsFoundProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {t('quotes.noFlightsFound.title')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t('quotes.noFlightsFound.description')}
      </Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          modifySearch && modifySearch();
        }}
      >
        {t('quotes.modifySearch')}
      </Button>
    </>
  );
};

export default NoFlightsFound;
