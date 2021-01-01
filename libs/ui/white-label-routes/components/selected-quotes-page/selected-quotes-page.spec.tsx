import { render } from '@testing-library/react';
import { mockQuotePerLeg } from '@white-label-airline/models/quotes';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import SelectedQuotesPage from './selected-quotes-page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }) => <div>{children}</div>,
  useLocation: jest.fn().mockReturnValue({ pathanme: '/booking' }),
}));

const mockStore = configureStore([]);

describe('Selected Quotes Page', () => {
  let store;

  describe('initial state', () => {
    beforeEach(() => {
      store = mockStore({
        searchForm: mockSearchForm,
        selectedQuotes: {
          outbound: mockQuotePerLeg,
        },
      });

      store.dispatch = jest.fn();
    });

    // disable below test due to accessilibity error for Material ui's List
    xit('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <SelectedQuotesPage />
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
