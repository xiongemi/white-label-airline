import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {
  getSupportedLanguages,
  changeLanguage,
  getCurrentLanguage,
} from '@white-label-airline/services/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Language from './components/language/language';
import { HeaderProps } from './header.props';

const Header: React.FunctionComponent<HeaderProps> = ({
  logoImage,
}: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box display="flex">
            <Box mr={2}>
              <img height={30} alt="logo" src={logoImage} />
            </Box>
            <Typography variant="h6" component="h1">
              {t('header.title')}
            </Typography>
          </Box>
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
