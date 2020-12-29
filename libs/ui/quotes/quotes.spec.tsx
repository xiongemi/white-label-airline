import { render } from '@testing-library/react';
import { mockQuotesPerTrip } from '@white-label-airline/models/quotes';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import { FetchStatus } from '@white-label-airline/store/models';
import { axe } from 'jest-axe';
import React from 'react';

import Quotes from './quotes';

describe('Quotes', () => {
  describe('initial fetch status', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Quotes
          isOutbound={true}
          searchForm={mockSearchForm}
          quotesFetchStatus={FetchStatus.Initial}
          quotes={mockQuotesPerTrip}
          getQuotes={jest.fn()}
          selectInboundQuote={jest.fn()}
          selectOutboundQuote={jest.fn()}
        />
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    it('should show loading spinner', () => {
      const { queryByTestId } = render(
        <Quotes
          isOutbound={true}
          searchForm={mockSearchForm}
          quotesFetchStatus={FetchStatus.Initial}
          quotes={mockQuotesPerTrip}
          getQuotes={jest.fn()}
          selectInboundQuote={jest.fn()}
          selectOutboundQuote={jest.fn()}
        />
      );

      expect(queryByTestId('loading')).toBeTruthy();
    });
  });

  describe('state with success fetch status', () => {
    it('should show quotes list', () => {
      const { queryByTestId } = render(
        <Quotes
          isOutbound={true}
          searchForm={mockSearchForm}
          quotesFetchStatus={FetchStatus.Success}
          quotes={mockQuotesPerTrip}
          getQuotes={jest.fn()}
          selectInboundQuote={jest.fn()}
          selectOutboundQuote={jest.fn()}
        />
      );

      expect(queryByTestId('loading')).toBeFalsy();
      expect(queryByTestId('quotes-list')).toBeTruthy();
    });
  });

  describe('state with error fetch status', () => {
    it('should show not show loading spinner nor quotes list', () => {
      const { queryByTestId } = render(
        <Quotes
          isOutbound={true}
          searchForm={mockSearchForm}
          quotesFetchStatus={FetchStatus.Error}
          quotes={mockQuotesPerTrip}
          getQuotes={jest.fn()}
          selectInboundQuote={jest.fn()}
          selectOutboundQuote={jest.fn()}
        />
      );

      expect(queryByTestId('loading')).toBeFalsy();
      expect(queryByTestId('quotes-list')).toBeFalsy();
    });
  });
});
