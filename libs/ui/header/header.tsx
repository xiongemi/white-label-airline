import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Feature, FeatureName } from '../feature';

import Language from './components/language/language';
import { HeaderProps } from './header.props';

const Header: React.FunctionComponent<HeaderProps> = ({
  logoImage,
  supportedLanguages,
  defaultLanguage,
}: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box display="flex">
            {logoImage && (
              <Box mr={2}>
                <img height={30} alt={t('header.logo')} src={logoImage} />
              </Box>
            )}
            <Typography variant="h6" component="h1">
              {t('header.title')}
            </Typography>
          </Box>
          <Feature name={FeatureName.SupportChangeLanguage}>
            <Language
              supportedLanguages={supportedLanguages}
              defaultLanguage={defaultLanguage}
            ></Language>
          </Feature>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
