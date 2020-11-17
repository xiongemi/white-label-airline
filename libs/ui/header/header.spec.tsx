import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import '@white-label-airline/services/i18n/i18n.mock';

import Header from './header';

describe('Header', () => {
  test('should not have accessibility violations', async () => {
    const { container } = render(<Header />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
