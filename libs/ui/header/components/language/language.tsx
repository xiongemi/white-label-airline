import { MenuItem, Select, withStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {
  LanguageProps,
  mapStateToProps,
  mapDispatchToProps,
} from './language.props';

const InheritColorSelect = withStyles({
  icon: {
    color: 'inherit',
  },
})(Select);

const Language: React.FunctionComponent<LanguageProps> = ({
  supportedLanguages,
  currentLanguage,
  changeLanguage,
  defaultLanguage,
}: LanguageProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (defaultLanguage !== currentLanguage) {
      changeLanguage(currentLanguage || defaultLanguage);
    }
  }, [changeLanguage, currentLanguage, defaultLanguage]);

  const handleChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <InheritColorSelect
      className="colorInherit"
      value={currentLanguage || defaultLanguage}
      onChange={handleChange}
      style={{ color: 'inherit' }}
      disableUnderline
    >
      {supportedLanguages.map((supportedLanguage) => (
        <MenuItem value={supportedLanguage} key={supportedLanguage}>
          {t('language.' + supportedLanguage)}
        </MenuItem>
      ))}
    </InheritColorSelect>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);
