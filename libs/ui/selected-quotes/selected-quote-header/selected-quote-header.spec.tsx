import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/services/quotes';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';
import '@white-label-airline/services/i18n/i18n.mock';

import SelectedQuoteHeader from './selected-quote-header';

expect.extend(toHaveNoViolations);

describe('Selected Quote Header', () => {
  test('should not have accessibility violations', async () => {
    const { container } = render(
      <SelectedQuoteHeader
        quote={mockQuotePerLeg}
        language="en"
        currency="CAD"
        date={new Date()}
        buttonClick={console.log}
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
