import DateFnsUtils from '@date-io/date-fns';
import { Button, Grid, Box } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  WlaSearchForm,
  WlaTripType,
} from '@white-label-airline/models/search-form';
import { Form, Field, getIn, withFormik, FormikProps } from 'formik';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Feature, FeatureName } from '../feature';
import { IsScreenSizeSm } from '../hooks/screen-size.hook';

import Country from './components/country/country';
import Currency from './components/currency/currency';
import Place from './components/place/place';
import TripType from './components/trip-type/trip-type';
import { searchFormSchema } from './models/search-form.schema';
import { SearchProps } from './search-form.props';

const SearchForm: React.FunctionComponent<SearchProps> = ({
  values,
  errors,
  setSubmitting,
  locale,
  resetSearchForm,
}: SearchProps & FormikProps<WlaSearchForm>) => {
  const { t } = useTranslation();

  const isScreenSizeSm = IsScreenSizeSm();

  useEffect(() => {
    if (values.tripType === WlaTripType.OneWay && values.returnDate) {
      values.returnDate = null;
    }
  }, [values]);

  useEffect(() => {
    setSubmitting(false);
  }, [setSubmitting]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
      <Form data-testid="search-form">
        <Feature name={FeatureName.ShowReset}>
          <Box mb={3} textAlign="right">
            <Button
              data-testid="search-form-reset"
              variant="contained"
              type="reset"
              fullWidth={isScreenSizeSm}
              color="secondary"
              onClick={resetSearchForm}
            >
              {t('search.reset')}
            </Button>
          </Box>
        </Feature>

        <Grid container spacing={3}>
          <Feature name={FeatureName.ShowCountry}>
            <Grid item xs={12} sm={6} md={3}>
              <Country name="country" label={t('search.country')} />
            </Grid>
          </Feature>

          <Feature name={FeatureName.ShowCurrency}>
            <Grid item xs={12} sm={6} md={3}>
              <Currency name="currency" label={t('search.currency')} />
            </Grid>
          </Feature>

          <Grid item xs={12} sm={6} md={3}>
            <TripType name="tripType" label={t('search.tripType')}></TripType>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Place
              label={t('search.from')}
              name="from"
              country={values?.country}
              currency={values?.currency}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Place
              label={t('search.to')}
              name="to"
              country={values?.country}
              currency={values?.currency}
              invalidPlaces={values?.from && [values?.from]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Field
              aria-label={t('search.departDate')}
              fullWidth={true}
              component={KeyboardDatePicker}
              name="departDate"
              label={t('search.departDate')}
              minDate={Date.now()}
              helperText={t(getIn(errors, 'departDate'), {
                field: t('search.departDate'),
              })}
              KeyboardButtonProps={{
                'aria-label': t('search.changeDate'),
              }}
            />
          </Grid>
          {values?.tripType === WlaTripType.RoundTrip && (
            <Grid item xs={12} sm={6} md={3}>
              <Field
                aria-label={t('search.returnDate')}
                fullWidth={true}
                component={KeyboardDatePicker}
                name="returnDate"
                label={t('search.returnDate')}
                minDate={values?.departDate}
                minDateMessage={t('messages.minDate')}
                helperText={t(getIn(errors, 'returnDate'), {
                  field: t('search.returnDate'),
                })}
                KeyboardButtonProps={{
                  'aria-label': t('search.changeDate'),
                }}
              />
            </Grid>
          )}
        </Grid>

        <Box mt={3} display="flex" justifyContent="center">
          <Button
            data-testid="search-form-submit"
            variant="contained"
            type="submit"
            fullWidth={isScreenSizeSm}
            color="primary"
            size="large"
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
  mapPropsToValues: (props: SearchProps): WlaSearchForm => {
    return props.searchFormValues;
  },
  validationSchema: searchFormSchema,
  handleSubmit: (searchForm: WlaSearchForm, { props }) => {
    props.submitSearchForm(searchForm);
  },
})(SearchForm);

export default SearchFormik;
