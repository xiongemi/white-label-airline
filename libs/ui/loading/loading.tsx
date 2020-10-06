import { Box, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Box textAlign="center">
      <CircularProgress />
      <Typography variant="subtitle1">{t('loading')}</Typography>
    </Box>
  );
};

export default Loading;
