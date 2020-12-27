import { fireEvent, render } from '@testing-library/react';
import { mockSearchForm } from '@white-label-airline/models/search-form';
import { enGB } from 'date-fns/locale';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { FeaturesProvider } from '../feature';
import { defaultFeatureName } from '../feature/models/feature-name.default';

import SearchForm from './search-form';

describe('Search Form', () => {
  const submitSearch = jest.fn();
  const resetSearch = jest.fn();

  it('should not submit invalid form', async () => {
    const { queryByTestId } = render(
      <FeaturesProvider value={defaultFeatureName}>
        <SearchForm
          searchFormValues={null}
          submitSearchForm={submitSearch}
          resetSearchForm={resetSearch}
          locale={enGB}
        />
      </FeaturesProvider>
    );

    await act(async () => {
      fireEvent.click(queryByTestId('search-form-submit'));
    });

    expect(submitSearch).not.toBeCalled();
  });

  it('should submit valid form', async () => {
    const { queryByTestId } = render(
      <FeaturesProvider value={defaultFeatureName}>
        <SearchForm
          searchFormValues={mockSearchForm}
          submitSearchForm={submitSearch}
          resetSearchForm={resetSearch}
          locale={enGB}
        />
      </FeaturesProvider>
    );

    await act(async () => {
      fireEvent.click(queryByTestId('search-form-submit'));
    });

    expect(submitSearch).toBeCalled();
  });
});
