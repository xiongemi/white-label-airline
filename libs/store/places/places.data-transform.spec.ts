import { WlaPlace } from '@white-label-airline/models/place';
import { mockPlacesResponse } from '@white-label-airline/services/places';

import { placesDataTransform } from './places.data-transform';

describe('Places Data Transform', () => {
  describe('transformPlacesResponseToPlaces', () => {
    it('should transforms places response to places', () => {
      const actual = placesDataTransform.transformPlacesResponseToPlaces(
        mockPlacesResponse
      );
      const expected: WlaPlace[] = [
        {
          id: 'ARN-sky',
          name: 'Stockholm Arlanda',
        },
      ];
      expect(actual).toEqual(expected);
    });

    it('should handle null response', () => {
      const actual = placesDataTransform.transformPlacesResponseToPlaces(null);
      const expected = undefined;
      expect(actual).toEqual(expected);
    });
  });
});
