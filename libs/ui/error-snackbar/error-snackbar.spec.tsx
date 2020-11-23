import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@white-label-airline/services/i18n/i18n.mock';

import ErrorSnackbar from './error-snackbar';

const mockStore = configureStore([]);

describe('Error Snackbar', () => {
  let store;

  describe('error state', () => {
    beforeEach(() => {
      store = mockStore({
        error: new Error(),
      });

      store.dispatch = jest.fn();
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <ErrorSnackbar />
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
