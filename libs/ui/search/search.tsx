import React from 'react';
import { useFormik } from 'formik';
import {
  mapStateToProps,
  mapDispatchToProps,
  SearchProps,
} from './search.props';
import { connect } from 'react-redux';
import Currency from './currency/currency';
import Country from './country/country';
import Place from './place/place';
import { initSearchForm, searchFormSchema } from './search.formik';

const Search: React.FunctionComponent<SearchProps> = (props: SearchProps) => {
  const searchFormik = useFormik({
    initialValues: initSearchForm,
    validationSchema: searchFormSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={searchFormik.handleSubmit}>
      <Currency
        onChange={searchFormik.handleChange}
        value={searchFormik.values.currency}
        name="currency"
      />
      <Country
        onChange={searchFormik.handleChange}
        value={searchFormik.values.from.country}
        name="from.country"
      />
      <Place
        label="from"
        name="from.place"
        country={searchFormik.values.from.country}
        currency={searchFormik.values.currency}
        onChange={searchFormik.handleChange}
        value={searchFormik.values.from.place}
      />
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
