export function getApiHeaders(apiKey: string) {
  return {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': apiKey,
    useQueryString: 'true',
  };
}
