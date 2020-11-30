import fetchMock from 'jest-fetch-mock';

import { currenciesService } from './currencies.service';
import { mockCurrenciesResponse } from './models/currencies-response.mock';

describe('Currencies Service', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should return response if successful', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockCurrenciesResponse));
    const actual = await currenciesService.getCurrencies();
    expect(actual).toEqual(mockCurrenciesResponse);
  });

  it('should throw response if returns error response', async () => {
    const response = new Response(null, {
      status: 401,
    });
    fetchMock.mockReturnValueOnce(Promise.resolve(response));
    try {
      await currenciesService.getCurrencies();
    } catch (actual) {
      expect(actual).toEqual(response);
    }
  });
});
