import { getApiHeaders } from '../api/api.service';

import { QuotesResponse } from './models/quotes-response.interface';

declare const process;

async function getQuotes(
  country: string,
  currency: string,
  locale: string,
  from: string,
  to: string,
  departDate: string,
  returnDate?: string
): Promise<QuotesResponse> {
  const url = new URL(
    `${process.env.NX_API_BROWSE_QUOTES}/${country}/${currency}/${locale}/${from}/${to}/${departDate}`
  );
  if (returnDate) {
    url.searchParams.set('query', returnDate);
  }

  const response = await fetch(url.toString(), {
    headers: getApiHeaders(),
  });
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const quotesService = { getQuotes };
