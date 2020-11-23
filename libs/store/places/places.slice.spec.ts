import { mockPlace } from '@white-label-airline/services/places';

import { initialPlacesState } from './models/places-state-initial.const';
import { placesSlice } from './places.slice';

describe('Places Slice', () => {
  it('should reset state when query for places', () => {
    const action = placesSlice.actions.getPlaces({
      query: 'toronto',
      country: 'CA',
      currency: 'CA',
    });
    const state = placesSlice.reducer(initialPlacesState, action);
    expect(state).toEqual({ query: 'toronto', results: [] });
  });

  it('should set state when get currencies success', () => {
    const getPlacesAction = placesSlice.actions.getPlaces({
      query: 'toronto',
      country: 'CA',
      currency: 'CA',
    });
    const getPlacesSuccessAction = placesSlice.actions.getPlacesSuccess([
      mockPlace,
    ]);
    let state = placesSlice.reducer(initialPlacesState, getPlacesAction);
    state = placesSlice.reducer(state, getPlacesSuccessAction);
    expect(state).toEqual({ query: 'toronto', results: [mockPlace] });
  });
});
