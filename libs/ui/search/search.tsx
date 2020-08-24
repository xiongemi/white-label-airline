import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';
import {
  mapStateToProps,
  mapDispatchToProps,
  mapStateToPropsType,
  mapDispatchToPropsType,
} from './search.props';
import { connect } from 'react-redux';

const Search: React.FunctionComponent<mapStateToPropsType> = (
  props: mapStateToPropsType & mapDispatchToPropsType
) => {
  const { t } = useTranslation();

  useEffect(() => {
    props.getCountries();
  });

  return (
    <form>
      <InputLabel>{t('countries')}</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select">
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
