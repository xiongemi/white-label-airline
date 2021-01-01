import { render } from '@testing-library/react';
import { mockQuotesPerTrip } from '@white-label-airline/models/quotes';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import { FetchStatus } from '@white-label-airline/store/models';
import {
  initialQuotesState,
  quotesSlice,
} from '@white-label-airline/store/quotes';
import { searchFormDataTransform } from '@white-label-airline/store/search-form';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import QuotesPage from './quotes-page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }) => <div>{children}</div>,
  useLocation: jest.fn().mockReturnValue({ pathanme: '/outbound' }),
}));

const mockStore = configureStore([]);

describe('QuotesPage', () => {
  let store;

  describe('initial state', () => {
    beforeEach(() => {
      store = mockStore({
        quotes: initialQuotesState,
        searchForm: mockSearchForm,
      });

      store.dispatch = jest.fn();
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <QuotesPage />
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    it('should show loading spinner', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <QuotesPage />
        </Provider>
      );

      expect(queryByTestId('loading')).toBeTruthy();
    });

    it('should dispatch action to load quotes', () => {
      render(
        <Provider store={store}>
          <QuotesPage />
        </Provider>
      );

      expect(store.dispatch).toBeCalledWith(
        quotesSlice.actions.getQuotes(
          searchFormDataTransform.transfromSearchFormValueToGetQuotesPayload(
            mockSearchForm,
            false
          )
        )
      );
    });
  });

  describe('success fetch status', () => {
    beforeEach(() => {
      store = mockStore({
        quotes: {
          quotes: mockQuotesPerTrip,
          fetchStatus: FetchStatus.Success,
        },
        searchForm: mockSearchForm,
      });

      store.dispatch = jest.fn();
    });

    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <QuotesPage />
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    it('should not show loading spinner', () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <QuotesPage />
        </Provider>
      );

      expect(queryByTestId('loading')).toBeFalsy();
    });
  });
});
