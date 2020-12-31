import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import '@white-label-airline/services/i18n/i18n.mock';

import NoFlightsFound from './no-flight-found';

describe('No Flights Found', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<NoFlightsFound />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
