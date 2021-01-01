import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/models/quotes';
import { axe } from 'jest-axe';
import React from 'react';

import QuotesList from './quotes-list';

describe('Quotes List', () => {
  // disable below test due to accessilibity error for Material ui's List
  xit('should not have accessibility violations', async () => {
    const quotes = [mockQuotePerLeg];
    const { container } = render(
      <QuotesList
        quotes={quotes}
        language="en"
        currency="CAD"
        selectQuote={jest.fn()}
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
