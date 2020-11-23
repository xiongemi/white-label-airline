import { mockInitialRootState } from '../root/root-state.mock';

import { placesSelectors } from './places.selectors';

describe('Places Selectors', () => {
  describe('initial state', () => {
    test('should return places', () => {
      const actual = placesSelectors.getPlaces(mockInitialRootState);
      const expected = { query: null, results: [] };

      expect(actual).toEqual(expected);
    });
  });
});
