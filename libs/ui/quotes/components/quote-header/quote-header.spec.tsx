import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/services/quotes';
import { axe } from 'jest-axe';
import React from 'react';
import '@white-label-airline/services/i18n/i18n.mock';

import QuoteHeader from './quote-header';

describe('Quote Header', () => {
  test('should not have accessibility violations', async () => {
    const { container } = render(
      <QuoteHeader
        quote={mockQuotePerLeg}
        language="en"
        currency="CAD"
        buttonClick={console.log}
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
