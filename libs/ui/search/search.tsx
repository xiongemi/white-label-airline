import React, { useEffect } from 'react';
import { useFormik, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import {
  mapStateToProps,
  mapDispatchToProps,
  SearchProps,
} from './search.props';
import Currency from './currency/currency';
import Country from './country/country';
import Place from './place/place';
import { initSearchForm, searchFormSchema } from './search.formik';

const Search: React.FunctionComponent<SearchProps> = (props: SearchProps) => {
  return (
    <Formik
      initialValues={initSearchForm}
      onSubmit={(event) => {
        console.log(event);
      }}
    >
      {({ handleSubmit, submitForm, isSubmitting, values }) => (
        <Form onSubmit={handleSubmit}>
          <Currency name="currency" />
          <Country name="from.country"></Country>
          <Place
            label="from"
            name="from.place"
            country={values.from.country}
            currency={values.currency}
          />
          <Button variant="contained" type="submit">
            Default
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
