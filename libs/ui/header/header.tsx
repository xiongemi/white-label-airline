import { useTranslation } from 'react-i18next';
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1">
          {t('header.title')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
