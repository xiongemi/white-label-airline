import { act, fireEvent, render } from '@testing-library/react';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import { mockInitialRootState } from '@white-label-airline/store/root';
import { searchFormSlice } from '@white-label-airline/store/search-form';
import { enCA } from 'date-fns/locale';
import { axe } from 'jest-axe';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import SearchPage from './search-page';

const mockStore = configureStore([]);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn().mockReturnValue({ push: jest.fn() }),
}));

describe('Search Page', () => {
  let store;

  describe('initial state', () => {
    beforeEach(() => {
      store = mockStore(mockInitialRootState);

      store.dispatch = jest.fn();
    });

    // disable this test due to accessiblity error in KeyboardDatePicker
    xit('should not have accessibility violations', async () => {
      const { container } = render(
        <Provider store={store}>
          <SearchPage initSearchForm={mockSearchForm} locale={enCA} />
        </Provider>
      );

      expect(await axe(container)).toHaveNoViolations();
    });

    it('should set form equals to initSearchForm passed in', async () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <SearchPage initSearchForm={mockSearchForm} locale={enCA} />
        </Provider>
      );

      await act(async () => {
        fireEvent.click(queryByTestId('search-form-submit'));
      });

      expect(store.dispatch).toHaveBeenCalledWith(
        searchFormSlice.actions.setSearchFormValues(mockSearchForm)
      );
    });
  });

  describe('state with valid search form', () => {
    beforeEach(() => {
      store = mockStore({
        ...mockInitialRootState,
        searchForm: mockSearchForm,
      });

      store.dispatch = jest.fn();
    });

    it('should set form equals to search form in state', async () => {
      const { queryByTestId } = render(
        <Provider store={store}>
          <SearchPage initSearchForm={null} locale={enCA} />
        </Provider>
      );

      await act(async () => {
        fireEvent.click(queryByTestId('search-form-submit'));
      });

      expect(store.dispatch).toHaveBeenCalledWith(
        searchFormSlice.actions.setSearchFormValues(mockSearchForm)
      );
    });
  });
});
