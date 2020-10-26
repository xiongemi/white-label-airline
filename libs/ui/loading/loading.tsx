import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

const Loading: React.FunctionComponent = () => {
  return (
    <Box textAlign="center">
      <CircularProgress />
    </Box>
  );
};

export default Loading;
