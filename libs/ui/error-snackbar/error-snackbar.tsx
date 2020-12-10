import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {
  ErrorSnackbarProps,
  mapDispatchToProps,
  mapStateToProps,
} from './error-snackbar.props';

const ErrorSnackbar: React.FunctionComponent<ErrorSnackbarProps> = ({
  error,
  clearError,
}: ErrorSnackbarProps) => {
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState<string>('messages.error');

  useEffect(() => {
    if (error && typeof error === 'string') {
      setErrorMessage(error);
    }
  }, [error]);

  return (
    <Snackbar
      open={Boolean(error)}
      autoHideDuration={6000}
      onClose={clearError}
    >
      <Alert severity="error" onClose={clearError}>
        {t(errorMessage)}
      </Alert>
    </Snackbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);
