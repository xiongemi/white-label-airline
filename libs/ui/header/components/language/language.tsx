import React from 'react';
import { MenuItem, Select, withStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { LanguageProps } from './language.props';

const InheritColorSelect = withStyles({
  icon: {
    color: 'inherit',
  },
})(Select);

const Language: React.FunctionComponent<LanguageProps> = ({
  supportedLanguages,
  currentLanguage,
  changeLanguage,
}: LanguageProps) => {
  const { t } = useTranslation();

  const handleChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <InheritColorSelect
      className="colorInherit"
      value={currentLanguage}
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

export default Language;
