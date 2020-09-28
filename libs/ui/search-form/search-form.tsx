import React from 'react';
import { Form, Formik, Field, getIn } from 'formik';
import { connect } from 'react-redux';
import { Button, Grid, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Feature } from '@paralleldrive/react-feature-toggles';

import { IsScreenSizeSm } from '../hooks/screen-size.hook';
import { FeatureToggleNames } from '../models/feature-toggle-names.enum';

import {
  mapStateToProps,
  mapDispatchToProps,
  SearchProps,
} from './search-form.props';
import Country from './components/country/country';
import Currency from './components/currency/currency';
import Place from './components/place/place';
import { defaultSearchForm } from './models/search-form-default.const';
import TripType from './components/trip-type/trip-type';
import { TripTypeEnum } from './models/trip-type.enum';
import { searchFormSchema } from './models/search-form.schema';

const SearchForm: React.FunctionComponent<SearchProps> = ({
  initSearchForm,
  bottonProps,
}: SearchProps) => {
  const { t } = useTranslation();

  const isScreenSizeSm = IsScreenSizeSm();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initSearchForm || defaultSearchForm}
        validationSchema={searchFormSchema}
        onSubmit={(event) => {
          console.log(event);
        }}
      >
        {({ handleSubmit, values, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Feature
                name={FeatureToggleNames.ShowCountry}
                activeComponent={() => (
                  <Grid item xs={6} md={3}>
                    <Country
                      name="country"
                      label={t('search.country')}
                      errors={errors}
                      touched={touched}
                    />
                  </Grid>
                )}
              />

              <Grid item xs={6} md={3}>
                <Currency
                  name="currency"
                  label={t('search.currency')}
                  errors={errors}
                  touched={touched}
                />
              </Grid>

              <Grid item xs={6} md={3}>
                <TripType
                  name="tripType"
                  label={t('search.tripType')}
                ></TripType>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={6} md={3}>
                <Place
                  label={t('search.from')}
                  name="from"
                  country={values.country}
                  currency={values.currency}
                  errors={errors}
                  touched={touched}
                />
              </Grid>

              <Grid item xs={6} md={3}>
                <Place
                  label={t('search.to')}
                  name="to"
                  country={values.country}
                  currency={values.currency}
                  errors={errors}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={6} md={3}>
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
                <Grid item xs={6} md={3}>
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

            <Box mt={3}>
              <Button
                variant="contained"
                type="submit"
                fullWidth={isScreenSizeSm}
                color="primary"
                {...bottonProps}
              >
                {t('search.search')}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
