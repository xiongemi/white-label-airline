import { defaultSearchForm } from './models/search-form.default';
import { searchFormSlice } from './search-form.slice';

describe('Search Form Slice', () => {
  it('should reset state when get currencies', () => {
    const action = searchFormSlice.actions.resetSearchFormValues();
    const state = searchFormSlice.reducer(defaultSearchForm, action);
    expect(state).toEqual(null);
  });

  it('should set state when get currencies success', () => {
    const action = searchFormSlice.actions.setSearchFormValues(
      defaultSearchForm
    );
    const state = searchFormSlice.reducer(null, action);
    expect(state).toEqual(defaultSearchForm);
  });
});
