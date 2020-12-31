import { render } from '@testing-library/react';
import { mockCountry } from '@white-label-airline/models/country';
import { mockCurrency } from '@white-label-airline/models/currency';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import {
  countriesSlice,
  initialCountriesState,
} from '@white-label-airline/store/countries';
import { FetchStatus } from '@white-label-airline/store/models';
import { placesSlice } from '@white-label-airline/store/places';
import { initialPlacesState } from '@white-label-airline/store/places/models/places-state.initial';
import { Formik } from 'formik';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Place from './place';

const mockStore = configureStore([]);

describe('Place', () => {
  let store;

  describe('initial state', () => {
    beforeEach(() => {
      store = mockStore({
        places: initialPlacesState,
      });

      store.dispatch = jest.fn();
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <Formik initialValues={mockSearchForm} onSubmit={jest.fn()}>
            <Place
              name="from"
              label="from"
              country={mockCountry}
              currency={mockCurrency}
            />
          </Formik>
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    it('should set the input value', () => {
      const { queryByLabelText } = render(
        <Provider store={store}>
          <Formik initialValues={mockSearchForm} onSubmit={jest.fn()}>
            <Place
              name="from"
              label="from"
              country={mockCountry}
              currency={mockCurrency}
            />
          </Formik>
        </Provider>
      );

      expect(queryByLabelText('from')).toHaveValue(
        `${mockSearchForm.from.name} (${mockSearchForm.from.id})`
      );
    });
  });
});
