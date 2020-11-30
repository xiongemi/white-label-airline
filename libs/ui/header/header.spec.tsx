import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import Header from './header';

describe('Header', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
