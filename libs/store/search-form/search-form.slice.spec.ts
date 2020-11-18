import { defaultSearchForm } from './models/search-form-default.const';
import { searchFormSlice } from './search-form.slice';

describe('Search Form Slice', () => {
  test('should reset state when get currencies', () => {
    const action = searchFormSlice.actions.resetSearchFormValues();
    const state = searchFormSlice.reducer(defaultSearchForm, action);
    expect(state).toEqual(null);
  });

  test('should set state when get currencies success', () => {
    const action = searchFormSlice.actions.setSearchFormValues(
      defaultSearchForm
    );
    const state = searchFormSlice.reducer(null, action);
    expect(state).toEqual(defaultSearchForm);
  });
});
