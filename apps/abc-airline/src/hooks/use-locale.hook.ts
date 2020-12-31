import {
  Localization,
  zhCN as materialZhCN,
  enUS as materialEnUS,
} from '@material-ui/core/locale';
import { onLanguageChanged } from '@white-label-airline/services/i18n';
import { zhCN as dateZhCN, enGB as dateEnGB } from 'date-fns/locale';
import { useEffect, useState } from 'react';

const useLocale = () => {
  const [language, setLanguage] = useState<string>();
  const [dateLocale, setDateLocale] = useState<Locale>();
  const [materialLocale, setMaterialLocale] = useState<Localization>();

  onLanguageChanged((lng: string) => setLanguage(lng));

  useEffect(() => {
    if (!language) {
      return;
    }
    if (language === 'zh-CN') {
      setDateLocale(dateZhCN);
      setMaterialLocale(materialZhCN);
    } else {
      setDateLocale(dateEnGB);
      setMaterialLocale(materialEnUS);
    }
  }, [language]);

  return { dateLocale, materialLocale };
};

export { useLocale };
