import fetchMock from 'jest-fetch-mock';

import { countriesService } from './countries.service';
import { mockCountriesResponse } from './models/countries-response.mock';

describe('Countries Service', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should return response if successful', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockCountriesResponse));
    const actual = await countriesService.getCountries('en-CA');
    expect(actual).toEqual(mockCountriesResponse);
  });

  it('should throw response if returns error response', async () => {
    const response = new Response(null, {
      status: 401,
    });
    fetchMock.mockReturnValueOnce(Promise.resolve(response));
    try {
      await countriesService.getCountries('en-CA');
    } catch (actual) {
      expect(actual).toEqual(response);
    }
  });
});
