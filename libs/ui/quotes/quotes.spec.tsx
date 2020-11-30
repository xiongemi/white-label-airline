import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/services/quotes';
import {
  FetchStatus,
  initialQuotesState,
  quotesSlice,
} from '@white-label-airline/store';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

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

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <Quotes
            queryParams={mockQuotesQueryParams}
            isOutbound={true}
            selectQuote={jest.fn()}
          />
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    it('should show loading spinner', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <Quotes
            queryParams={mockQuotesQueryParams}
            isOutbound={true}
            selectQuote={jest.fn()}
          />
        </Provider>
      );

      expect(queryByTestId('loading')).toBeTruthy();
    });

    it('should dispatch action to load quotes', () => {
      render(
        <Provider store={store}>
          <Quotes
            queryParams={mockQuotesQueryParams}
            isOutbound={true}
            selectQuote={jest.fn()}
          />
        </Provider>
      );

      expect(store.dispatch).toBeCalledWith(
        quotesSlice.actions.getQuotes({
          ...mockQuotesQueryParams,
          isOutbound: true,
        })
      );
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

    it('should show quotes list', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <Quotes
            queryParams={mockQuotesQueryParams}
            isOutbound={true}
            selectQuote={jest.fn()}
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

    it('should show not show loading spinner nor quotes list', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <Quotes
            queryParams={mockQuotesQueryParams}
            isOutbound={true}
            selectQuote={jest.fn()}
          />
        </Provider>
      );

      expect(queryByTestId('loading')).toBeFalsy();
      expect(queryByTestId('quotes-list')).toBeFalsy();
    });
  });
});
