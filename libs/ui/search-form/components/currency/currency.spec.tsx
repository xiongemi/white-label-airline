import { render } from '@testing-library/react';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import { mockCurrency } from '@white-label-airline/services/currencies';
import {
  currenciesSlice,
  initialCurrenciesState,
} from '@white-label-airline/store/currencies';
import { FetchStatus } from '@white-label-airline/store/models';
import { Formik } from 'formik';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Currency from './currency';

const mockStore = configureStore([]);

describe('Currency', () => {
  let store;

  describe('initial state', () => {
    beforeEach(() => {
      store = mockStore({
        currencies: initialCurrenciesState,
      });

      store.dispatch = jest.fn();
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <Formik initialValues={mockSearchForm} onSubmit={jest.fn()}>
            <Currency name="currency" label="currency" />
          </Formik>
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    it('should dispatch action to get currencies', () => {
      render(
        <Provider store={store}>
          <Formik initialValues={mockSearchForm} onSubmit={jest.fn()}>
            <Currency name="currency" label="currency" />
          </Formik>
        </Provider>
      );

      expect(store.dispatch).toBeCalledWith(
        currenciesSlice.actions.getCurrencies()
      );
    });
  });

  describe('state with success fetch status', () => {
    beforeEach(() => {
      store = mockStore({
        currencies: {
          fetchStatus: FetchStatus.Success,
          currencies: [mockCurrency],
        },
      });

      store.dispatch = jest.fn();
    });

    it('should not dispatch action to get currencies', () => {
      render(
        <Provider store={store}>
          <Formik
            initialValues={{ currency: mockCurrency }}
            onSubmit={jest.fn()}
          >
            <Currency name="currency" label="currency" />
          </Formik>
        </Provider>
      );

      expect(store.dispatch).not.toBeCalledWith(
        currenciesSlice.actions.getCurrencies()
      );
    });

    it('should set the input value if form initial value is set to be one of the options', () => {
      const { queryByLabelText } = render(
        <Provider store={store}>
          <Formik
            initialValues={{ currency: mockCurrency }}
            onSubmit={jest.fn()}
          >
            <Currency name="currency" label="currency" />
          </Formik>
        </Provider>
      );

      expect(queryByLabelText('currency')).toHaveValue(mockCurrency.Code);
    });
  });
});
