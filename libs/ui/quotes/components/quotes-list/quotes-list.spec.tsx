import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/models/quotes';
import { axe } from 'jest-axe';
import React from 'react';
import '@white-label-airline/services/i18n/i18n.mock';

import QuotesList from './quotes-list';

describe('Quotes List', () => {
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
