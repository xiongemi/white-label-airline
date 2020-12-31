import { render } from '@testing-library/react';
import { mockInitialRootState } from '@white-label-airline/store/root';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Header from './header';

const mockStore = configureStore([]);

describe('Header', () => {
  let store;

  describe('initial state', () => {
    beforeEach(() => {
      store = mockStore(mockInitialRootState);

      store.dispatch = jest.fn();
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <Header defaultLanguage={'en'} supportedLanguages={['en']} />
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
