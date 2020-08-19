import { CountryResponse } from './countriy-responose.interface';

export async function getCountriesApi(): Promise<CountryResponse[]> {
  const response = await fetch(
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US'
  );
  if (response.ok) {
    return response.json();
  }
  throw response;
}
