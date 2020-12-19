import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {
  getSupportedLanguages,
  getCurrentLanguage,
} from '@white-label-airline/services/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { Feature, FeatureName } from '../feature';

import Language from './components/language/language';
import { mapDispatchToProps, HeaderProps } from './header.props';

const Header: React.FunctionComponent<HeaderProps> = ({
  logoImage,
  changeLanguage,
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
          <Feature name={FeatureName.SupportChangeLanguage}>
            <Language
              supportedLanguages={getSupportedLanguages()}
              currentLanguage={getCurrentLanguage()}
              changeLanguage={changeLanguage}
            ></Language>
          </Feature>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default connect(null, mapDispatchToProps)(Header);
