import { format } from 'date-fns';

import { getApiHeaders } from '../api/api.service';

import { QuotesResponseInterface } from './models/quotes-response.interface';

declare const process;

async function getQuotes(
  country: string,
  currency: string,
  locale: string,
  from: string,
  to: string,
  departDate: Date,
  returnDate?: Date
): Promise<QuotesResponseInterface> {
  const departDateString = format(departDate, 'yyyy-MM-dd');
  const returnDateString = returnDate ? format(returnDate, 'yyyy-MM-dd') : '';

  const url = new URL(
    `${process.env.NX_API_BROWSE_QUOTES}/${country}/${currency}/${locale}/${from}/${to}/${departDateString}`
  );
  url.searchParams.set('query', returnDateString);

  const response = await fetch(url.toString(), {
    headers: getApiHeaders(),
  });
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const quotesService = { getQuotes };
