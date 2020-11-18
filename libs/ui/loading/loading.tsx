import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

const Loading: React.FunctionComponent = () => {
  return (
    <Box textAlign="center" data-testid="loading">
      <CircularProgress />
    </Box>
  );
};

export default Loading;
