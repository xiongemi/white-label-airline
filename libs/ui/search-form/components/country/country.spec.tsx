import { render } from '@testing-library/react';
import { mockCountry } from '@white-label-airline/models/country';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import {
  countriesSlice,
  initialCountriesState,
} from '@white-label-airline/store/countries';
import { FetchStatus } from '@white-label-airline/store/models';
import { Formik } from 'formik';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Country from './country';

const mockStore = configureStore([]);

describe('Country', () => {
  let store;

  describe('initial state', () => {
    beforeEach(() => {
      store = mockStore({
        countries: initialCountriesState,
      });

      store.dispatch = jest.fn();
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <Formik initialValues={mockSearchForm} onSubmit={jest.fn()}>
            <Country name="country" label="country" />
          </Formik>
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    it('should dispatch action to get countries', () => {
      render(
        <Provider store={store}>
          <Formik initialValues={mockSearchForm} onSubmit={jest.fn()}>
            <Country name="country" label="country" />
          </Formik>
        </Provider>
      );

      expect(store.dispatch).toBeCalledWith(
        countriesSlice.actions.getCountries()
      );
    });
  });

  describe('state with success fetch status', () => {
    beforeEach(() => {
      store = mockStore({
        countries: {
          fetchStatus: FetchStatus.Success,
          countries: [mockCountry],
        },
      });

      store.dispatch = jest.fn();
    });

    it('should not dispatch action to get countries', () => {
      render(
        <Provider store={store}>
          <Formik initialValues={{ country: mockCountry }} onSubmit={jest.fn()}>
            <Country name="country" label="country" />
          </Formik>
        </Provider>
      );

      expect(store.dispatch).not.toBeCalledWith(
        countriesSlice.actions.getCountries()
      );
    });

    it('should set the input value if form initial value is set to be one of the options', () => {
      const { queryByLabelText } = render(
        <Provider store={store}>
          <Formik initialValues={{ country: mockCountry }} onSubmit={jest.fn()}>
            <Country name="country" label="country" />
          </Formik>
        </Provider>
      );

      expect(queryByLabelText('country')).toHaveValue(mockCountry.name);
    });
  });
});
