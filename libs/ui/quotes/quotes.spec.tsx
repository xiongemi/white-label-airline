import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/services/quotes';
import { FetchStatus, initialQuotesState } from '@white-label-airline/store';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@white-label-airline/services/i18n/i18n.mock';

import { mockQuotesQueryParams } from '../models/quotes-query-params.mock';

import Quotes from './quotes';

const mockStore = configureStore([]);

describe('Quotes', () => {
  let store;

  describe('initial state', () => {
    beforeEach(() => {
      store = mockStore({
        quotes: initialQuotesState,
      });

      store.dispatch = jest.fn();
    });

    test('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <Quotes
            queryParams={mockQuotesQueryParams}
            isOutbound={true}
            selectQuote={console.log}
          />
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    test('should show loading spinner for initial store state', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <Quotes
            queryParams={mockQuotesQueryParams}
            isOutbound={true}
            selectQuote={console.log}
          />
        </Provider>
      );

      expect(queryByTestId('loading')).toBeTruthy();
    });
  });

  describe('state with success fetch status', () => {
    beforeEach(() => {
      store = mockStore({
        quotes: {
          fetchStatus: FetchStatus.Success,
          quotes: {
            outbound: [mockQuotePerLeg],
          },
        },
      });

      store.dispatch = jest.fn();
    });

    test('should show quotes list', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <Quotes
            queryParams={mockQuotesQueryParams}
            isOutbound={true}
            selectQuote={console.log}
          />
        </Provider>
      );

      expect(queryByTestId('loading')).toBeFalsy();
      expect(queryByTestId('quotes-list')).toBeTruthy();
    });
  });

  describe('state with error fetch status', () => {
    beforeEach(() => {
      store = mockStore({
        quotes: {
          fetchStatus: FetchStatus.Error,
          quotes: {},
        },
      });

      store.dispatch = jest.fn();
    });

    test('should show not show loading spinner nor quotes list', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <Quotes
            queryParams={mockQuotesQueryParams}
            isOutbound={true}
            selectQuote={console.log}
          />
        </Provider>
      );

      expect(queryByTestId('loading')).toBeFalsy();
      expect(queryByTestId('quotes-list')).toBeFalsy();
    });
  });
});
