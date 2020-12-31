import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/models/quotes';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import { WlaSelectedQuotes } from '@white-label-airline/models/selected-quotes';
import { axe } from 'jest-axe';
import React from 'react';

import SelectedQuotes from './selected-quotes';

describe('Selected Quotes', () => {
  // disable below test due to accessilibity error for Material ui's List
  xit('should not have accessibility violations', async () => {
    const mockSelectedQuotes = {
      outbound: mockQuotePerLeg,
      inbound: mockQuotePerLeg,
    };
    const { container } = render(
      <SelectedQuotes
        searchForm={mockSearchForm}
        selectedQuotes={mockSelectedQuotes}
        modifyOutboundQuote={jest.fn()}
        modifyInboundQuote={jest.fn()}
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should not show any quote with no quotes selected', () => {
    const mockSelectedQuotes: WlaSelectedQuotes = {
      outbound: null,
    };

    const { queryAllByTestId } = render(
      <SelectedQuotes
        searchForm={mockSearchForm}
        selectedQuotes={mockSelectedQuotes}
        modifyOutboundQuote={jest.fn()}
        modifyInboundQuote={jest.fn()}
      />
    );

    expect(queryAllByTestId('quote-list-item').length).toEqual(0);
  });

  it('should show outbound quote', () => {
    const mockSelectedQuotes: WlaSelectedQuotes = {
      outbound: mockQuotePerLeg,
    };
    const { queryAllByTestId } = render(
      <SelectedQuotes
        searchForm={mockSearchForm}
        selectedQuotes={mockSelectedQuotes}
        modifyOutboundQuote={jest.fn()}
        modifyInboundQuote={jest.fn()}
      />
    );

    expect(queryAllByTestId('quote-list-item').length).toEqual(1);
  });

  it('should show both inbound and outbound quote', () => {
    const mockSelectedQuotes: WlaSelectedQuotes = {
      outbound: mockQuotePerLeg,
      inbound: mockQuotePerLeg,
    };
    const { queryAllByTestId } = render(
      <SelectedQuotes
        searchForm={mockSearchForm}
        selectedQuotes={mockSelectedQuotes}
        modifyOutboundQuote={jest.fn()}
        modifyInboundQuote={jest.fn()}
      />
    );

    expect(queryAllByTestId('quote-list-item').length).toEqual(2);
  });
});
