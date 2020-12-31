import { WlaQuotePerLeg } from '@white-label-airline/models/quotes';
import { WlaPlacePerQuote } from '@white-label-airline/models/quotes/place-per-quote.interface';
import {
  QuotesResponse,
  PlacePerQuoteResponse,
  QuoteResponse,
} from '@white-label-airline/services/quotes';

const transformPlacePerQuoteResponseToPlacePerQuote = (
  placePerQuoteResponse: PlacePerQuoteResponse
): WlaPlacePerQuote => {
  return placePerQuoteResponse
    ? {
        id: placePerQuoteResponse.PlaceId,
        name: placePerQuoteResponse.Name,
        code: placePerQuoteResponse.IataCode,
        cityName: placePerQuoteResponse.CityName,
      }
    : undefined;
};

/**
 * Convert quotes response to quotes used by the app
 * @param quotesResponse response got from quotes
 * @param isOutbound whether is search for is outbound or not
 * @return { WlaQuotePerLeg[] }
 */
const transformQuotesResponseToQuotes = (
  quotesResponse: QuotesResponse
): WlaQuotePerLeg[] => {
  const carriers = quotesResponse?.Carriers;
  const places = quotesResponse?.Places;
  return quotesResponse?.Quotes?.map(
    (quote: QuoteResponse): WlaQuotePerLeg => {
      const leg = quote.OutboundLeg;
      const origin = places?.find(
        (place: PlacePerQuoteResponse) => place.PlaceId === leg.OriginId
      );
      const destination = places?.find(
        (place: PlacePerQuoteResponse) => place.PlaceId === leg.DestinationId
      );
      return {
        id: quote.QuoteId,
        minPrice: quote.MinPrice,
        direct: quote.Direct,
        carriers: leg?.CarrierIds.map(
          (carrierId) =>
            carriers.find((carrier) => carrier.CarrierId === carrierId)?.Name
        ),
        origin: transformPlacePerQuoteResponseToPlacePerQuote(origin),
        destination: transformPlacePerQuoteResponseToPlacePerQuote(destination),
      };
    }
  );
};

export const quotesDataTransfrom = { transformQuotesResponseToQuotes };
