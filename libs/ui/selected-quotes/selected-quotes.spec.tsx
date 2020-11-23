import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/services/quotes';
import { initialSelectedQuotesState } from '@white-label-airline/store';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@white-label-airline/services/i18n/i18n.mock';

import { mockQuotesQueryParams } from '../models/quotes-query-params.mock';

import SelectedQuotes from './selected-quotes';

const mockStore = configureStore([]);

describe('Selected Quotes', () => {
  let store;

  describe('initial state', () => {
    beforeEach(() => {
      store = mockStore({
        selectedQuotes: initialSelectedQuotesState,
      });

      store.dispatch = jest.fn();
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <SelectedQuotes
            queryParams={mockQuotesQueryParams}
            modifyOutboundQuote={jest.fn()}
            modifyInboundQuote={jest.fn()}
          />
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    it('should not show any quote', () => {
      const { queryAllByTestId } = render(
        <Provider store={store}>
          <SelectedQuotes
            queryParams={mockQuotesQueryParams}
            modifyOutboundQuote={jest.fn()}
            modifyInboundQuote={jest.fn()}
          />
        </Provider>
      );

      expect(queryAllByTestId('quote-list-item').length).toEqual(0);
    });
  });

  describe('state with outboound flights selected', () => {
    beforeEach(() => {
      store = mockStore({
        selectedQuotes: {
          outbound: mockQuotePerLeg,
        },
      });

      store.dispatch = jest.fn();
    });

    it('should show outbound quote', () => {
      const { queryAllByTestId } = render(
        <Provider store={store}>
          <SelectedQuotes
            queryParams={mockQuotesQueryParams}
            modifyOutboundQuote={jest.fn()}
            modifyInboundQuote={jest.fn()}
          />
        </Provider>
      );

      expect(queryAllByTestId('quote-list-item').length).toEqual(1);
    });
  });

  describe('state with both inbound and outbound flights selected', () => {
    beforeEach(() => {
      store = mockStore({
        selectedQuotes: {
          outbound: mockQuotePerLeg,
          inbound: mockQuotePerLeg,
        },
      });

      store.dispatch = jest.fn();
    });

    it('should show both inbound and outbound quote', () => {
      const { queryAllByTestId } = render(
        <Provider store={store}>
          <SelectedQuotes
            queryParams={mockQuotesQueryParams}
            modifyOutboundQuote={jest.fn()}
            modifyInboundQuote={jest.fn()}
          />
        </Provider>
      );

      expect(queryAllByTestId('quote-list-item').length).toEqual(2);
    });
  });
});
