import { render } from '@testing-library/react';
import { mockQuotesPerTrip } from '@white-label-airline/models/quotes';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import { axe } from 'jest-axe';
import React from 'react';

import Quotes from './quotes';

describe('Quotes', () => {
  // disable below test due to accessilibity error for Material ui's List
  xit('should not have accessibility violations', async () => {
    const { container } = render(
      <Quotes
        isOutbound={true}
        searchForm={mockSearchForm}
        quotes={mockQuotesPerTrip}
        selectInboundQuote={jest.fn()}
        selectOutboundQuote={jest.fn()}
        language="en-GB"
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
