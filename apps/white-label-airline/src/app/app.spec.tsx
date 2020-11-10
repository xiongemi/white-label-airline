import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import App from './app';

describe('App', () => {
  test('should not have accessibility violations', async () => {
    const { container } = render(<App />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
