import fetchMock from 'jest-fetch-mock';

import { mockQuotesResponse } from './models/quotes-response.mock';
import { quotesService } from './quotes.service';

describe('Quotes Service', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should return response if successful', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockQuotesResponse));
    const actual = await quotesService.getQuotes(
      'CA',
      'CA',
      'en-CA',
      'toronto',
      'new york',
      '2020-10-12',
      '2020-10-23'
    );
    expect(actual).toEqual(mockQuotesResponse);
  });

  it('should throw response if returns error response', async () => {
    const response = new Response(null, {
      status: 401,
    });
    fetchMock.mockReturnValueOnce(Promise.resolve(response));
    try {
      await quotesService.getQuotes(
        'CA',
        'CA',
        'en-CA',
        'toronto',
        'new york',
        '2020-10-12',
        '2020-10-23'
      );
    } catch (actual) {
      expect(actual).toEqual(response);
    }
  });
});
