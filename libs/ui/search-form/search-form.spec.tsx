import { fireEvent, render } from '@testing-library/react';
import {
  defaultSearchForm,
  mockInitialRootState,
  mockSearchForm,
} from '@white-label-airline/store';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import '@white-label-airline/services/i18n/i18n.mock';

import { FeaturesProvider } from '../feature';
import { defaultFeatureNames } from '../feature/models/feature-names.default';

import SearchForm from './search-form';

describe('Search Form', () => {
  const mockStore = configureStore([]);
  const submitSearch = jest.fn();
  let store;

  beforeEach(() => {
    store = mockStore(mockInitialRootState);

    store.dispatch = jest.fn();
  });

  it('should not submit invalid form', async () => {
    const { queryByTestId } = render(
      <FeaturesProvider value={defaultFeatureNames}>
        <Provider store={store}>
          <SearchForm
            initSearchForm={defaultSearchForm}
            submitSearch={submitSearch}
          />
        </Provider>
      </FeaturesProvider>
    );

    await act(async () => {
      fireEvent.click(queryByTestId('search-form-submit'));
    });

    expect(submitSearch).not.toBeCalled();
  });

  it('should submit valid form', async () => {
    const { queryByTestId } = render(
      <FeaturesProvider value={defaultFeatureNames}>
        <Provider store={store}>
          <SearchForm
            initSearchForm={mockSearchForm}
            submitSearch={submitSearch}
          />
        </Provider>
      </FeaturesProvider>
    );

    await act(async () => {
      fireEvent.click(queryByTestId('search-form-submit'));
    });

    expect(submitSearch).toBeCalled();
  });
});
