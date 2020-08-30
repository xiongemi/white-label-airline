declare const process;

export function getApiHeaders() {
  return {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': process.env.NX_API_KEY,
    useQueryString: 'true',
  };
}
