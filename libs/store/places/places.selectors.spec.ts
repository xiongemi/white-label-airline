import { mockInitialRootState } from '../root/models/root-state.mock';

import { placesSelectors } from './places.selectors';

describe('Places Selectors', () => {
  describe('initial state', () => {
    it('should return places', () => {
      const actual = placesSelectors.getPlaces(mockInitialRootState);
      const expected = { query: null, results: [] };

      expect(actual).toEqual(expected);
    });
  });
});
