import { RootState, countriesSelectors } from '@white-label-airline/store';
import { Dispatch } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { Search } from './search';

const mapStateToProps = (state: RootState) => {
  return {
    countries: countriesSelectors.getCountriesState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
