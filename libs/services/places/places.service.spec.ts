import fetchMock from 'jest-fetch-mock';

import { mockPlacesResponse } from './models/places-response.mock';
import { placesService } from './places.service';

describe('Places Service', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should return response if successful', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockPlacesResponse));
    const actual = await placesService.getPlaces('CA', 'CA', 'en-CA', 'query');
    expect(actual).toEqual(mockPlacesResponse);
  });

  it('should throw response if returns error response', async () => {
    const response = new Response(null, {
      status: 401,
    });
    fetchMock.mockReturnValueOnce(Promise.resolve(response));
    try {
      await placesService.getPlaces('CA', 'CA', 'en-CA', 'query');
    } catch (actual) {
      expect(actual).toEqual(response);
    }
  });
});
