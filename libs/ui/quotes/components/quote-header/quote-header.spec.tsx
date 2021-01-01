import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/models/quotes';
import { axe } from 'jest-axe';
import React from 'react';

import QuoteHeader from './quote-header';

describe('Quote Header', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <QuoteHeader
        quote={mockQuotePerLeg}
        language="en"
        currency="CAD"
        buttonClick={jest.fn()}
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
