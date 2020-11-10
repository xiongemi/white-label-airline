import DateFnsUtils from '@date-io/date-fns';
import { Button, Grid, Box } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SearchFormInterface, TripTypeEnum } from '@white-label-airline/store';
import { Form, Field, getIn, withFormik, FormikProps } from 'formik';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import React, { useEffect } from 'react';
import { FeatureToggle } from 'react-feature-toggles';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { IsScreenSizeSm } from '../hooks/screen-size.hook';
import { FeatureToggleNames } from '../models/feature-toggle-names.enum';

import Country from './components/country/country';
import Currency from './components/currency/currency';
import Place from './components/place/place';
import TripType from './components/trip-type/trip-type';
import { searchFormSchema } from './models/search-form.schema';
import {
  SearchProps,
  mapStateToProps,
  mapDispatchToProps,
} from './search-form.props';

const SearchForm: React.FunctionComponent<SearchProps> = ({
  bottonProps,
  values,
  errors,
  setSubmitting,
}: SearchProps & FormikProps<SearchFormInterface>) => {
  const { t } = useTranslation();

  const isScreenSizeSm = IsScreenSizeSm();

  useEffect(() => {
    setSubmitting(false);
  }, [setSubmitting]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Form>
        <Grid container spacing={3}>
          <FeatureToggle featureName={FeatureToggleNames.ShowCountry}>
            <Grid item xs={12} sm={6} md={3}>
              <Country name="country" label={t('search.country')} />
            </Grid>
          </FeatureToggle>

          <FeatureToggle featureName={FeatureToggleNames.ShowCurrency}>
            <Grid item xs={12} sm={6} md={3}>
              <Currency name="currency" label={t('search.currency')} />
            </Grid>
          </FeatureToggle>

          <Grid item xs={12} sm={6} md={3}>
            <TripType name="tripType" label={t('search.tripType')}></TripType>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Place
              label={t('search.from')}
              name="from"
              country={values.country}
              currency={values.currency}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Place
              label={t('search.to')}
              name="to"
              country={values.country}
              currency={values.currency}
              invalidPlaces={values.from && [values.from]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Field
              fullWidth={true}
              component={KeyboardDatePicker}
              name="departDate"
              label={t('search.departDate')}
              minDate={Date.now()}
              helperText={t(getIn(errors, 'departDate'), {
                field: t('search.departDate'),
              })}
            />
          </Grid>
          {values.tripType === TripTypeEnum.RoundTrip && (
            <Grid item xs={12} sm={6} md={3}>
              <Field
                fullWidth={true}
                component={KeyboardDatePicker}
                name="returnDate"
                label={t('search.returnDate')}
                minDate={values.departDate}
                minDateMessage={t('messages.minDate', {
                  departDate: t('search.departDate'),
                  returnDate: t('search.returnDate'),
                })}
                helperText={t(getIn(errors, 'returnDate'), {
                  field: t('search.returnDate'),
                })}
              />
            </Grid>
          )}
        </Grid>

        <Box mt={3} display="flex" justifyContent="center">
          <Button
            variant="contained"
            type="submit"
            fullWidth={isScreenSizeSm}
            color="primary"
            size="large"
            {...bottonProps}
          >
            {t('search.search')}
          </Button>
        </Box>
      </Form>
    </MuiPickersUtilsProvider>
  );
};

const SearchFormik = withFormik({
  displayName: 'SearchForm',
  enableReinitialize: true,
  mapPropsToValues: (props: SearchProps): SearchFormInterface => {
    return props.searchFormValues || props.initSearchForm;
  },
  validationSchema: searchFormSchema,
  handleSubmit: (searchForm: SearchFormInterface, { props, setSubmitting }) => {
    props.submitSearch(searchForm, { setSubmitting });
    props.setSearchFormValues(searchForm);
  },
})(SearchForm);

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormik);
