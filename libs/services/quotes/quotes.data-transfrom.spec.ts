import { mockQuotesResponse } from './models/quotes-response.mock';
import { quotesDataTransfrom } from './quotes.data-transform';

describe('Quotes Data Transfrom', () => {
  test('should transform quotes response', () => {
    const actual = quotesDataTransfrom.transformQuotesResponseToQuotes(
      mockQuotesResponse
    );
  });
});
