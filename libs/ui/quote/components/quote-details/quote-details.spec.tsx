import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/services/quotes';
import { axe } from 'jest-axe';
import React from 'react';

import QuoteDetails from './quote-details';

describe('Quote Details', () => {
  test('should not have accessibility violations', async () => {
    const { container } = render(<QuoteDetails quote={mockQuotePerLeg} />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
