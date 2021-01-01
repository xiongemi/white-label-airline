import { fireEvent, render } from '@testing-library/react';
import {
  mockSearchForm,
  WlaSearchForm,
  WlaTripType,
} from '@white-label-airline/models/search-form';
import { mockInitialRootState } from '@white-label-airline/store/root';
import { enGB } from 'date-fns/locale';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import '@white-label-airline/services/i18n/i18n.mock';

import { FeaturesProvider } from '../feature';
import { defaultFeatureName } from '../feature/models/feature-name.default';

import SearchForm from './search-form';

describe('Search Form', () => {
  const mockStore = configureStore([]);
  const submitSearchForm = jest.fn();
  const resetSearchForm = jest.fn();
  let store;

  beforeEach(() => {
    store = mockStore(mockInitialRootState);

    store.dispatch = jest.fn();
  });

  it('should not submit invalid form', async () => {
    const invalidSearchForm: WlaSearchForm = {
      country: { code: 'CA', name: 'Canada' },
      tripType: WlaTripType.RoundTrip,
      currency: {
        code: 'CAD',
      },
      from: undefined,
      departDate: undefined,
      to: undefined,
      returnDate: undefined,
    };
    const { queryByTestId } = render(
      <FeaturesProvider value={defaultFeatureName}>
        <Provider store={store}>
          <SearchForm
            searchFormValues={invalidSearchForm}
            submitSearchForm={submitSearchForm}
            resetSearchForm={resetSearchForm}
            locale={enGB}
          />
        </Provider>
      </FeaturesProvider>
    );

    await act(async () => {
      fireEvent.click(queryByTestId('search-form-submit'));
    });

    expect(submitSearchForm).not.toBeCalled();
  });

  it('should submit valid form', async () => {
    const { queryByTestId } = render(
      <FeaturesProvider value={defaultFeatureName}>
        <Provider store={store}>
          <SearchForm
            searchFormValues={mockSearchForm}
            submitSearchForm={submitSearchForm}
            resetSearchForm={resetSearchForm}
            locale={enGB}
          />
        </Provider>
      </FeaturesProvider>
    );

    await act(async () => {
      fireEvent.click(queryByTestId('search-form-submit'));
    });

    expect(submitSearchForm).toBeCalled();
  });

  it('should reset form', async () => {
    const { queryByTestId } = render(
      <FeaturesProvider value={defaultFeatureName}>
        <Provider store={store}>
          <SearchForm
            searchFormValues={mockSearchForm}
            submitSearchForm={submitSearchForm}
            resetSearchForm={resetSearchForm}
            locale={enGB}
          />
        </Provider>
      </FeaturesProvider>
    );

    await act(async () => {
      fireEvent.click(queryByTestId('search-form-reset'));
    });

    expect(resetSearchForm).toBeCalled();
  });
});
