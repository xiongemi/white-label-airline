import React from 'react';
import { Form, Formik, Field, getIn, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import {
  mapStateToProps,
  mapDispatchToProps,
  SearchProps,
} from './search-form.props';
import Currency from './components/currency/currency';
import Place from './components/place/place';
import { initSearchForm } from './types/search-form-init.const';
import TripType from './components/trip-type/trip-type';
import { TripTypeEnum } from './types/trip-type.enum';
import { getSearchFormSchema } from './types/search-form.schema';

const SearchForm: React.FunctionComponent<SearchProps> = (
  props: SearchProps
) => {
  const { t } = useTranslation();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={props.initSearchForm || initSearchForm}
        validationSchema={getSearchFormSchema}
        onSubmit={(event) => {
          console.log(event);
        }}
      >
        {({ handleSubmit, values, errors, touched }) => (
          <>
            <div>{JSON.stringify(errors)}</div>
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
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
                    name={'from.place'}
                    country={props.country}
                    currency={values.currency}
                    errors={errors}
                    touched={touched}
                  />
                </Grid>

                <Grid item xs={6} md={3}>
                  <Place
                    label={t('search.to')}
                    name="to.place"
                    country={props.country}
                    currency={values.currency}
                    errors={errors}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <Field
                    fullWidth={true}
                    component={KeyboardDatePicker}
                    name="from.date"
                    label={t('search.departDate')}
                    helperText={t(getIn(errors, 'to.date'), {
                      field: t('search.arrivalDate'),
                    })}
                  />
                </Grid>
                {values.tripType === TripTypeEnum.RoundTrip && (
                  <Grid item xs={6} md={3}>
                    <Field
                      fullWidth={true}
                      component={KeyboardDatePicker}
                      name="to.date"
                      label={t('search.arrivalDate')}
                      helperText={t(getIn(errors, 'to.date'), {
                        field: t('search.arrivalDate'),
                      })}
                    />
                  </Grid>
                )}
              </Grid>

              <Button variant="contained" type="submit">
                {t('search.search')}
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
