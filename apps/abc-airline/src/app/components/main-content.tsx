import { Box, Container, ThemeProvider } from '@material-ui/core';
import {
  Localization,
  zhCN as materialZhCN,
  enUS as materialEnUS,
} from '@material-ui/core/locale';
import { changeLanguage } from '@white-label-airline/services/i18n';
import Header from '@white-label-airline/ui/header';
import WhiteLabelRoutes from '@white-label-airline/ui/white-label-routes';
import { zhCN as dateZhCN, enGB as dateEnGB } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.png';
import { initSearchForm } from '../../models/search-form-init.const';
import { theme } from '../theme';

import { mapStateToProps, MainContentProps } from './main-content.props';

const MainContent: React.FunctionComponent<MainContentProps> = ({
  language,
  history,
}: MainContentProps) => {
  const [dateLocale, setDateLocale] = useState<Locale>();
  const [materialLocale, setMaterialLocale] = useState<Localization>();

  useEffect(() => {
    if (!language) {
      return;
    }
    changeLanguage(language);
    if (language === 'zh-CN') {
      setDateLocale(dateZhCN);
      setMaterialLocale(materialZhCN);
    } else {
      setDateLocale(dateEnGB);
      setMaterialLocale(materialEnUS);
    }
  }, [language]);

  return (
    <ThemeProvider theme={theme(materialLocale)}>
      <Header logoImage={logo} />
      <Box mt={3} component={Container}>
        <WhiteLabelRoutes
          initSearchForm={initSearchForm}
          history={history}
          locale={dateLocale}
        />
      </Box>
    </ThemeProvider>
  );
};

export default connect(mapStateToProps, null)(MainContent);
