import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  test('should not have accessitliby violations', async () => {
    const { container } = render(<App />);

    expect(await axe(container)).toHaveNoViolations();
  });
});