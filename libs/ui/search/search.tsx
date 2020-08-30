import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';
import {
  mapStateToProps,
  mapDispatchToProps,
  SearchProps,
} from './search.props';
import { connect } from 'react-redux';

const Search: React.FunctionComponent<SearchProps> = (props: SearchProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <form>
      <InputLabel>{t('search.country')}</InputLabel>

      {props.countries && props.countries.length && (
        <Select labelId="country-label">
          {props.countries.map((country, index) => {
            return (
              <MenuItem key={country.Code} value={country.Code}>
                {country.Name}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
