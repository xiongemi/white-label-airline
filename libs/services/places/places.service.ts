import { getApiHeaders } from '../api/api.service';
import { PlacesResponse } from './places-response.interface';

declare const process;

function getPlaces(
  country: string,
  currency: string,
  locale: string,
  query: string
): Promise<PlacesResponse> {
  const url = new URL(
    `${process.env.NX_API_PLACES_URL}/${country}/${currency}/${locale}`
  );
  url.searchParams.set(query, query);

  return fetch(url.toString(), {
    headers: getApiHeaders(),
  }).then((response: Response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
}

export const placesService = { getPlaces };
