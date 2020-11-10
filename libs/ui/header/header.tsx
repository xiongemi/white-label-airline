import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {
  getSupportedLanguages,
  changeLanguage,
  getCurrentLanguage,
} from '@white-label-airline/services/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Language from './components/language/language';

const Header: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="h6" component="h1">
            {t('header.title')}
          </Typography>
          <Language
            supportedLanguages={getSupportedLanguages()}
            currentLanguage={getCurrentLanguage()}
            changeLanguage={changeLanguage}
          ></Language>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
