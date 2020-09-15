import React from 'react';
import { Form, Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { DatePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import {
  mapStateToProps,
  mapDispatchToProps,
  SearchProps,
} from './search-form.props';
import Currency from './components/currency/currency';
import Country from './components/country/country';
import Place from './components/place/place';
import { initSearchForm } from './types/search-form-init.const';
import TripType from './components/trip-type/trip-type';

const SearchForm: React.FunctionComponent<SearchProps> = (
  props: SearchProps
) => {
  const { t } = useTranslation();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={props.initSearchForm || initSearchForm}
        onSubmit={(event) => {
          console.log(event);
        }}
      >
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box width="45%">
                <Currency name="currency" label={t('search.currency')} />
              </Box>
              <Box width="45%">
                <TripType
                  name="tripType"
                  label={t('search.tripType')}
                ></TripType>
              </Box>
            </Box>

            <Country name="from.country" label={t('search.country')} />
            <Place
              label={t('search.place')}
              name="from.place"
              country={values.from.country}
              currency={values.currency}
            />
            <Field component={DatePicker} name="from.date" label="date" />

            <Country name="to.country" label={t('search.country')} />

            <Button variant="contained" type="submit">
              {t('search.search')}
            </Button>
          </Form>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
