import React from 'react';
import { mockQuotePerLeg } from '@white-label-airline/services/quotes';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';

import QuoteHeader from './quote-header';

expect.extend(toHaveNoViolations);

describe('Quote Header', () => {
  test('should not have accessibility violations', async () => {
    const { container } = render(
      <QuoteHeader
        quote={mockQuotePerLeg}
        language="en"
        currency="CAD"
        buttonText="button"
        buttonClick={console.log}
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
